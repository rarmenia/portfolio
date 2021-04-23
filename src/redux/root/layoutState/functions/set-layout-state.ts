import { LayoutState } from '../../../../interfaces/layoutstate';
import { LayoutStateActions } from '../enums/layout-state-actions';

export function setLayoutState(newState: LayoutState) {
  return {
    type: LayoutStateActions.SET,
    payload: newState,
  };
}