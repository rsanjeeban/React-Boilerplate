// eslint-disable-next-line import/prefer-default-export
export const isIE =
  !!document.documentMode ||
  window.navigator.userAgent.indexOf('Edge') > -1 ||
  false;