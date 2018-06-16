const defaultState = {
  boids: [],
  target: null,
  boundaries: null
};

export const state = (...overrides) =>
  overrides
    ? overrides.reduce(
        (state, overrides) => Object.assign({}, state, overrides),
        defaultState
      )
    : defaultState;
