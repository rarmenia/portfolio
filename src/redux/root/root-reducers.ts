import { combineReducers } from 'redux';
import { rLayoutState } from './layout-state';

export const rootReducers = combineReducers({
  layoutState: rLayoutState
});