const { getErrorMessage } = require('./miscUtil');

describe('get error message given error', () => {
  it('when existing errorCode provided', () => {
    expect(
      getErrorMessage({ ErrorCode: 2004, ErrorMessage: 'TimestampExpired' }),
    ).toEqual('Login link expired');
  });

  it('when errorCode provided does not exist- same message should display', () => {
    expect(
      getErrorMessage({
        ErrorCode: 2034,
        ErrorMessage: 'Same message should display',
      }),
    ).toEqual('Same message should display');
  });

  it('when error provided does not have ErrorCode or ErrorMessage - same message should display', () => {
    expect(
      getErrorMessage({
        errorCode: 2034,
        errorMessage: 'Same message should display',
      }),
    ).toEqual({
      errorCode: 2034,
      errorMessage: 'Same message should display',
    });
    expect(getErrorMessage('Same message should display')).toEqual(
      'Same message should display',
    );
  });
});
