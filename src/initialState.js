const defaultState = {
  boids: [],
  boundaries: {
    x: 800,
    y: 600,
  },
};

export const state = (overrides = {}) => Object.assign(defaultState, overrides);
