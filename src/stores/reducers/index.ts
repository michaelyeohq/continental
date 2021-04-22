// Libraries
import { combineReducers } from 'redux';
// Reducers
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({ authStore: AuthReducer });

export default rootReducer;
