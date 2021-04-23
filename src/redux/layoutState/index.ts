import { getDefault, LayoutState } from '../../interfaces/layoutstate';

export enum LayoutStateActions {

  RESET,
  SET,
  UPDATE

}

export function updateLayoutState (partialState: Partial<LayoutState>) {
  return {
    type: LayoutStateActions.UPDATE,
    payload: partialState
  };
}

export function setLayoutState(newState: LayoutState) {
  return {
    type: LayoutStateActions.SET,
    payload: newState,
  };
}

export function resetLayoutState() {
  return {
    type: LayoutStateActions.RESET,
    payload: null
  };
}

const initialState: LayoutState = getDefault();

export const rLayoutState = (
  state: LayoutState = initialState,
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


