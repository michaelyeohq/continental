// Libraries
import { Action } from 'redux'
// Action Types
import * as ActionTypes from '../action-types'

export const initialState = { default: 'default' }

const defaultReducer = (state: InitialState = initialState, action: Action) => {
  const newState = { ...state }
  switch (action.type) {
    case ActionTypes.DEFAULT:
      return newState
    default:
      return state
  }
}

export default defaultReducer
