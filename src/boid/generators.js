import { createBoid } from './model';
import { angleToVector } from '../core';
import { randomLocation } from '../generators';

export const randomBoid = state =>
  createBoid({
    location: randomLocation(state.boundaries),
    acceleration: angleToVector(0, 0.1),
  });

export const randomBoids = (state, n) =>
  Array(n)
    .fill(null)
    .map(randomBoid.bind(null, state));
