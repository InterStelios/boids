const defaultState = {
  boids: [],
  boundaries: {
    x: 800,
    y: 600,
  },
};

const state = (overrides = {}) => Object.assign(defaultState, overrides);

export { state };
