import { combineReducers } from 'redux';
import { rLayoutState } from './layoutState';

export const rootReducers = combineReducers({
  layoutState: rLayoutState
});