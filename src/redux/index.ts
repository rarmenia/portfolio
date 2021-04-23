import {combineReducers} from 'redux';
import { LayoutState } from '../interfaces/layoutstate';

import { rLayoutState } from './layoutState';

export const allReducers = combineReducers({
  layoutState: rLayoutState
});

export interface RootState {
  layoutState: LayoutState;
}