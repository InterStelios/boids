import { createBoid } from './model';
import { angleToVector } from '../core';
import { randomLocation } from '../generators';

const randomBoid = state =>
  createBoid({
    location: randomLocation(state),
    acceleration: angleToVector(0, 0.1),
  });

const randomBoids = (state, n) =>
  Array(n)
    .fill(null)
    .map(randomBoid.bind(null, state));

export { randomLocation, randomBoid, randomBoids };
