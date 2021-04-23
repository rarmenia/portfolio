export interface LayoutState {
  displayTopbar: boolean;
}

export function getDefault(): LayoutState {
  return {
    displayTopbar: false,
  };
}
