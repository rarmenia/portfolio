import { LayoutState, getDefault } from '../../../../interfaces/layout-state';
import { LayoutStateActions } from '../enums/layout-state-actions';

export const rLayoutState = (
  state: LayoutState = getDefault(),
  action: {type: LayoutStateActions, payload: LayoutState},
): LayoutState => {

  switch (action.type) {
    case LayoutStateActions.RESET:
      return getDefault();
    case LayoutStateActions.SET:
      return action.payload;
    case LayoutStateActions.UPDATE:
      return {...state, ...action.payload};
    default:
      return state;
  }

};
