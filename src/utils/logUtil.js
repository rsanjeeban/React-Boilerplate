import axios from 'axios';

const apiLoggerInstance = axios.create({
  baseURL: process.env.ERROR_LOG_API,
});

export const logApiLevel = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  fatal: 4,
};

const statusCodeLog = [400, 401, 403, 408, 404, 500, 502, 503, 504];

export function logApi(message, level = logApiLevel.error) {
  const messageBuilder = `[${process.env.REACT_APP_ENV}]:
   ${message.response.status}-${message.response.Error}-${JSON.stringify(
    message.response.data,
  )}`;

  if (process.env.ERROR_LOG_API) {
    apiLoggerInstance
      .post('/SendLog', {
        Message: messageBuilder,
        level,
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(`apiLogError: ${error}`));
  }
}

export function serviceLog(message, type = logApiLevel.error) {
  // send error message to server
  if (
    type === logApiLevel.error &&
    message.response &&
    message.response.status &&
    statusCodeLog.indexOf(message.response.status) > -1
  ) {
    logApi(message, type);
  }
}
