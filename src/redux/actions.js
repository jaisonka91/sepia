import axios from 'axios';

export const USED_LOGGIN_SUCESS = 'USED_LOGGIN_SUCESS';
export const USED_LOGGIN_FAILED = 'USED_LOGGIN_FAILED';
export const SEARCH_DATA = 'SEARCH_DATA';

export function login(username, password) {
  const authData = {
    username: 'jaison',
    password: 'jaison',
  };
  if (username == authData.username && password == authData.password) {
    window.localStorage.setItem('token', authData.username);
    return { type: USED_LOGGIN_SUCESS };
  } else {
    return { type: USED_LOGGIN_FAILED };
  }
}

export function logout(){
  return { type: USED_LOGGIN_FAILED };
}

export function searchData(data) {
  return dispatch =>{
    let result = [];
    axios.get('https://swapi.co/api/planets/?search='+data)
    .then((res) =>{
      if(res && res.data){
        result = res.data.results;
        dispatch({ type: SEARCH_DATA, result});
      }else{
        dispatch({ type: SEARCH_DATA, result});
      }
    });
  }

}
