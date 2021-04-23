import { LayoutState } from '../../../../interfaces/layout-state';
import { LayoutStateActions } from '../enums/layout-state-actions';

export function setLayoutState(newState: LayoutState) {
  return {
    type: LayoutStateActions.SET,
    payload: newState,
  };
}