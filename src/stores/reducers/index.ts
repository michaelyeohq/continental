// Libraries
import { combineReducers } from 'redux';
// Reducers
import AuthReducer from './reducer-auth';
import InventoryReducer from './reducer-inventory';

const rootReducer = combineReducers({ authStore: AuthReducer, inventoryStore: InventoryReducer });

export default rootReducer;
