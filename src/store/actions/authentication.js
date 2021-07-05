import { logApiLevel, serviceLog } from 'utils/logUtil';
import * as api from '../api';

import {
  SET_TOKEN,
  RESET_APP
} from './_ActionTypes';

export function logout() {
  return (dispatch) => {
    dispatch({
      type: RESET_APP,
    });
  };
}

export function login(data) {
  return async (dispatch) => {
      api.login(data).then(res => {
        dispatch({
          type: SET_TOKEN,
          token: res.data,
        });
      }).catch(error => {
        serviceLog(error, logApiLevel.error);
      })
  };
}
