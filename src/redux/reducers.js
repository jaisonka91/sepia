import { combineReducers } from 'redux';
import { user } from './reducer/user';
import { search } from './reducer/search';

const allReducers = combineReducers({
  user,
  search
});

export default allReducers;
