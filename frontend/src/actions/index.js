import { LOAD_TOOLS } from './actionTypes';

export const loadTools = tools => {
  return ({
    type: LOAD_TOOLS,
    tools: tools
  })
}