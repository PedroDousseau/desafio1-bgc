import { toolsReducer } from './toolsReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  tools: toolsReducer
});