import { combineReducers } from 'redux';
import { rLayoutState } from './layoutState';

export const allReducers = combineReducers({
  layoutState: rLayoutState
});