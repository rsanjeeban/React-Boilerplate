import * as actionTypes from '../actions/_ActionTypes';
import {  LOCAL_STORE_TOKEN } from '../../constant';

const initToken = localStorage.getItem(LOCAL_STORE_TOKEN);

const INITIAL_STATE = {
  token: initToken,
  loggedIn: (initToken !== null),
};

function localRemove() {
  localStorage.removeItem(LOCAL_STORE_TOKEN);
}

const authentication = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.RESET_APP:
      localRemove();
      return {
        ...INITIAL_STATE,
        token: null,
        loggedIn: false,
      };

    case actionTypes.LOGIN_SUCCESS:
    {
      const {
        token
      } = action;

      localStorage.setItem(LOCAL_STORE_TOKEN, token);

      return {
        ...state,
        loggedIn: true,
        token,
      };
    }

    case actionTypes.LOGIN_FAILURE:
    {
      localRemove();
      return {
        ...state,
        token: null,
        loggedIn: false,
      };
    }

    default:
      return state;
  }
};

export default authentication;
