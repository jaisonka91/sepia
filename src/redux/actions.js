import axios from 'axios';
let axiosToken;
export const USED_LOGGIN_SUCESS = 'USED_LOGGIN_SUCESS';
export const USED_LOGGIN_FAILED = 'USED_LOGGIN_FAILED';
export const USED_LOGGOUT = 'USED_LOGGOUT';
export const SEARCH_DATA = 'SEARCH_DATA';
export const AUTH_ERROR_CLEAR = 'AUTH_ERROR_CLEAR';

export function login(username, password) {
  const authData = {
    username: 'Luke Skywalker',
    password: '19BBY',
  };
  if (username == authData.username && password == authData.password) {
    return { type: USED_LOGGIN_SUCESS };
  } else {
    return { type: USED_LOGGIN_FAILED };
  }
}

export function logout(){
  return { type: USED_LOGGOUT };
}

export function searchData(data) {
  return dispatch =>{
    var CancelToken = axios.CancelToken;
    if(axiosToken){
      axiosToken.cancel();
    }
    axiosToken = CancelToken.source();
    let result = [];
    if(data != ''){
      axios.get('https://swapi.co/api/planets/?search='+data,{
        cancelToken: axiosToken.token
      })
      .then((res) =>{
        if(res && res.data){
          result = res.data.results;
          dispatch({ type: SEARCH_DATA, result});
        }else{
          dispatch({ type: SEARCH_DATA, result});
        }
      }).catch((err)=>{
      });
    }else{
      dispatch({ type: SEARCH_DATA, result});
    }
  }
}

export function authErrorClear(){
  return { type: AUTH_ERROR_CLEAR }
}
