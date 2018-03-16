import { USED_LOGGIN_SUCESS, USED_LOGGIN_FAILED } from '../actions';

const initialState = {
  loggedIn: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USED_LOGGIN_SUCESS:
      return {
        loggedIn: true,
      };
    case USED_LOGGIN_FAILED:
      return {
        loggedIn: false,
      };
  }
  return state;
};
