// Libraries
import { combineReducers } from 'redux';
// Reducers
import DefaultReducer from './reducer-default';

const rootReducer = combineReducers({ defaultStore: DefaultReducer });

export default rootReducer;
