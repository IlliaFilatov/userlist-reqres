import usersReducer from './usersReducer';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  users: usersReducer,
  isLogged: loggedReducer
});

export default allReducers;