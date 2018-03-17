import { USED_LOGGIN_SUCESS, USED_LOGGIN_FAILED, USED_LOGGOUT, AUTH_ERROR_CLEAR } from '../actions';

const initialState = {
  loggedIn: false,
  authError: false
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USED_LOGGIN_SUCESS:
      return {
        ...state,
        loggedIn: true,
        authError: false
      };
    case USED_LOGGIN_FAILED:
      return {
        ...state,
        loggedIn: false,
        authError: true
      };
    case USED_LOGGOUT:
      return {
        ...state,
        loggedIn: false,
        authError: false
      };
    case AUTH_ERROR_CLEAR:
      return {
        ...state,
        authError: false
      };
  }
  return state;
};
