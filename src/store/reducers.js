import  { combineReducers } from 'redux';
import { loginReducer, skyApiReducer } from './reducer/login_reducer';

const allReducers = combineReducers({
  login: loginReducer,
  skyApi: skyApiReducer
});

export default allReducers;
