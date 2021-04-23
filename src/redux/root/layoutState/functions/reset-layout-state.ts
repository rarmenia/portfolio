import { LayoutStateActions } from '../enums/layout-state-actions';

export function resetLayoutState() {
  return {
    type: LayoutStateActions.RESET,
    payload: null
  };
}
