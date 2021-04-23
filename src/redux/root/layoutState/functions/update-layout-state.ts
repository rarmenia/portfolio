import { LayoutState } from '../../../../interfaces/layoutstate';
import { LayoutStateActions } from '../enums/layout-state-actions';

export function updateLayoutState (partialState: Partial<LayoutState>) {
  return {
    type: LayoutStateActions.UPDATE,
    payload: partialState
  };
}