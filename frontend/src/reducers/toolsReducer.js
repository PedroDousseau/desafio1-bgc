import { LOAD_TOOLS } from '../actions/actionTypes';

const initialState = [];

export const toolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOOLS:
      return action.tools;
    default:
      return state;
  }
}