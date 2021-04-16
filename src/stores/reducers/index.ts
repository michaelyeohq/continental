// Libraries
import { combineReducers } from 'redux';
// Reducers
import DefaultReducer from './reducer-default';
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({ defaultStore: DefaultReducer, authStore: AuthReducer });

export default rootReducer;
