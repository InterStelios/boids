const randomLocation = state => ({
  x: Math.floor(Math.random() * state.boundaries.x),
  y: Math.floor(Math.random() * state.boundaries.y),
});

export { randomLocation };
