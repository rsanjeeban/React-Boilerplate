/* eslint-disable no-console */
import { createBrowserHistory } from 'history';
import { isDev } from 'config';
import { logApiLevel, serviceLog } from './logUtil';

export const history = createBrowserHistory();

export function consoleLog(message, type = 'log') {
  if (isDev) {
    const fn = console[type];
    if (console && fn) {
      fn(message);
    }
  }
}

export function SqillUpLog(message, type = logApiLevel.info) {
  if (type === logApiLevel.info) {
    consoleLog(message, 'log');
  } else if (type === logApiLevel.error) {
    serviceLog(message, type);
  }
}
