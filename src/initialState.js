import { updateBall } from "./ball";
import { randomBoids } from "./boid/generators";

const defaultState = {
  boids: [],
  target: null,
  boundaries: null
};

export const state = canvas => (...overrides) =>
  overrides
    ? overrides.reduce(
        (state, overrides) => Object.assign({}, state, overrides),
        Object.assign({}, defaultState, {
          boundaries: {
            x: canvas.width,
            y: canvas.height
          }
        })
      )
    : defaultState;

export const initialState = canvas => {
  const initialState = state(canvas)();

  return state(canvas)({
    target: updateBall(initialState),
    boids: randomBoids(initialState, 2000)
  });
};
