import * as actionTypes from '../actions/_ActionTypes';

const INITIAL_STATE = {
  profile: {},
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_PROFILE: {
      const { userData } = action;

      return {
        ...state,
        profile:userData,
      };
    }
    default:
      return state;
  }
};

export default user;
