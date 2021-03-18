// Libraries
import { Action } from 'redux'
// Action Types
import * as ActionTypes from '../action-types'

export const initialState = { default: 'default', test: [], test2: {inner1: "test"} }

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
