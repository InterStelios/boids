import { createBoid } from './boid';
const randomLocation = state => ({
  x: Math.floor(Math.random() * state.boundaries.x),
  y: Math.floor(Math.random() * state.boundaries.y),
});

const randomBoid = state =>
  createBoid({
    location: randomLocation(state),
    velocity: { x: 1, y: 1 },
  });

const randomBoids = (state, n) =>
  Array(n)
    .fill(null)
    .map(randomBoid.bind(null, state));

export { randomLocation, randomBoid, randomBoids };
