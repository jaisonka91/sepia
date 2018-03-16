const LOGIN_CHECK = 'LOGIN_CHECK';
const SEARCH_DATA = 'SEARCH_DATA';

export const availableActions = {
  LOGIN_CHECK	  : 'LOGIN_CHECK',
  SEARCH_DATA   : 'SEARCH_DATA'
};

export function checkLogin(username, password) {
  return { type: LOGIN_CHECK, username, password}
}

export function searchData(data) {
  return { type: SEARCH_DATA, data}
}
