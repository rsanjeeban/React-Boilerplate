/* eslint-disable no-useless-catch */
/* eslint-disable no-else-return */
// https://github.com/diegohaz/arc/wiki/API-service
import { stringify } from 'query-string';
import merge from 'lodash/merge';
import axios from 'axios';
import { apiUrl } from 'config';
import {
  mapResourceToAPIEdnPoint,
  responseInterceptor,
  errorInterceptor,
} from 'services/helpers/apiHelper';

axios.interceptors.response.use(responseInterceptor);

export const parseSettings = ({
  method = 'get',
  data,
  locale,
  ...otherSettings
} = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale || 'en-US'
  };
  const settings = merge(
    {
      data: data
        ? JSON.stringify({ ...data, ApiKey: null })
        : undefined,
      method,
      headers,
    },
    otherSettings,
  );
  return settings;
};

export const parseEndpoint = (endpoint, params) => {
  const url =
    endpoint.indexOf('http') === 0
      ? endpoint
      : `${apiUrl}${mapResourceToAPIEdnPoint(endpoint)}`;
  const querystring = params ? `?${stringify(params)}` : '';
  return `${url}${querystring}`;
};

const api = {};

api.request = (endpoint, { params, ...settings } = {}) => {
  const requestContent = {
    url: parseEndpoint(endpoint, params),
    ...parseSettings(settings),
  };
  return axios(requestContent);
};

['delete', 'get'].forEach(method => {
  api[method] = (endpoint, settings) =>
    api.request(endpoint, { method, ...settings });
});

['post', 'put', 'patch'].forEach(method => {
  api[method] = (endpoint, data, settings) =>
    api.request(endpoint, { method, data, ...settings });
});

api.create = (settings = {}) => ({
  settings,

  setToken(token) {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: `Bearer ${token}`,
    };
  },

  unsetToken() {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: undefined,
    };
  },

  request(endpoint, reqSettings) {
    return api.request(endpoint, merge({}, this.settings, reqSettings));
  },

  post(endpoint, data, postSettings) {
    return this.request(endpoint, { method: 'post', data, ...postSettings });
  },

  get(endpoint, getSettings) {
    return this.request(endpoint, { method: 'get', ...getSettings });
  },

  put(endpoint, data, putSettings) {
    return this.request(endpoint, { method: 'put', data, ...putSettings });
  },

  patch(endpoint, data, patchSettings) {
    return this.request(endpoint, { method: 'patch', data, ...patchSettings });
  },

  delete(endpoint, deleteSettings) {
    return this.request(endpoint, { method: 'delete', ...deleteSettings });
  },
});

export default api;
