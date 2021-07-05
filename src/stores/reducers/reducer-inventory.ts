// Libraries
import { AnyAction } from 'redux';
// Action Types
import * as ActionTypes from '../action-types';
// Initial State
interface IItemInterface {
  id: number;
  name: string;
  type: string;
  price: number;
  stock: number;
  manufacturer: string;
}
interface IInventoryInterface {
  items: IItemInterface[];
}
export const initialState: IInventoryInterface = {
  items: [],
};
// Reducer
const defaultReducer = (state = initialState, action: AnyAction) => {
  const newState = { ...state };
  switch (action.type) {
    case ActionTypes.GET_ITEMS_SUCCESS:
      return action.payload;
    default:
      return newState;
  }
};
export default defaultReducer;
