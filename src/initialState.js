const defaultState = {
  boids: [],
  target: null,
  boundaries: {
    x: 1280,
    y: 1024,
  },
};

export const state = (overrides = {}) => Object.assign(defaultState, overrides);
