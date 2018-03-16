import { availableActions } from '../actions.js';

export const loginReducer = (state={}, action) =>{
  console.log('111')
  const authData = {
    username: 'jaison',
    password: 'jaison'
  };
  if(action.type == 'LOGIN_CHECK'){
    if(action.username == authData.username && action.password == authData.password){
      window.localStorage.setItem('token', authData.username);
      return true
    }
    return false;
  }
  return false;
};

export const skyApiReducer = (state={}, action) =>{
  console.log(state, action,'>>>>>>>>>')
  return state;
}
