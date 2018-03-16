import { combineReducers } from 'redux';
import { user } from './reducer/user';

const allReducers = combineReducers({
  user,
});

export default allReducers;
