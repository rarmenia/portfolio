import { LayoutState } from '../../../../interfaces/layout-state';
import { LayoutStateActions } from '../enums/layout-state-actions';

export function updateLayoutState (partialState: Partial<LayoutState>) {
  return {
    type: LayoutStateActions.UPDATE,
    payload: partialState
  };
}