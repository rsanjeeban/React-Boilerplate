/* eslint-disable no-else-return */
import { transvoiceLog } from 'utils/miscUtil';
import { currentDate } from 'utils/dateTimeUtils';
import {
  errorCodeMap,
  LOCAL_STORE_RESOURCE_LOGIN_INFO,
  LOCAL_STORE_TOKEN,
} from 'constant';
import axios from 'axios';
import store from 'setupStore';
import { transvoiceLoginRequest } from 'store/authenticate/actions';

const resourceAPIStore = {
  resourceUserAuthenticate: 'AuthenticateResourceUser',
  createToken: 'CreateAuthenticationToken/',
  calendarAssignment: 'SearchWorkAssignments',
  assignmentRequest: 'GetResourceRequests',
  userProfile: 'GetResourceProfile',
  resourceAvailability: 'GetResourceAvailability',
};

export const mapResourceToAPIEdnPoint = resource =>
  resourceAPIStore[resource] || resource;

const ignoreErrorNotifyRequests = ['GetTimeReportSignature'];

let isRefreshing = false;
const refreshSubscribers = [];

const subscribeTokenRefresh = cb => {
  refreshSubscribers.push(cb);
};

const onRrefreshed = () => {
  refreshSubscribers.forEach(cb => cb());
};

export const responseInterceptor = async response => {
  // Because multisoft api always return status 200 even when response error
  // But axios library base on response status code to decide error or not
  // Therefore we can not catch error on `catch` block on pattern axios.get(...).then(...).catch(...)
  // So we base on response.data.Errors of Multisoft to decide response is error or not
  if (response.data.Errors) {
    const { config } = response;
    const originalRequest = config;
    if (errorCodeMap[response.data.Errors[0].ErrorCode] === 'invalidToken') {
      if (!isRefreshing) {
        isRefreshing = true;
        const initResourceAuthenticate = localStorage.getItem(
          LOCAL_STORE_RESOURCE_LOGIN_INFO,
        );
        const loginInfo = initResourceAuthenticate
          ? JSON.parse(initResourceAuthenticate)
          : null;
        if (!loginInfo) return Promise.reject(response.data.Errors[0]);

        await store.dispatch(
          transvoiceLoginRequest(
            loginInfo.interpreterId,
            loginInfo.resourceIdentifier,
            currentDate().add(1, 'hour').format('YYYY-MM-DD HH:mm'),
          ),
        );
        isRefreshing = false;
        setTimeout(() => {
          onRrefreshed();
        }, 0);
      }
      const retryOrigReq = new Promise((resolve, reject) => {
        subscribeTokenRefresh(() => {
          const initToken = localStorage.getItem(LOCAL_STORE_TOKEN);
          originalRequest.data = JSON.parse(originalRequest.data);
          originalRequest.data.Token = initToken;
          originalRequest.data = JSON.stringify(originalRequest.data);
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    } else {
      response.data.Errors.forEach(element => {
        const isIgnoreNotify =
          ignoreErrorNotifyRequests.filter(
            r => originalRequest.url.indexOf(r) !== -1,
          ).length > 0;
        // if (!isIgnoreNotify) toast.error(element.ErrorMessage);
      });
      return Promise.reject(response.data.Errors[0]);
    }
  }
  return response;
};

export const errorInterceptor = error => {
  // toast.error(Translate({ content: 'error.commonError' }));
  transvoiceLog('error interceptor');
  const sendError = {
    ErrorCode: error.response.status,
    ErrorMessage: error.message,
  };
  Promise.reject(sendError);
};
