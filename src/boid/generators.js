import { createBoid } from './model';
import { angleToVector, getRandomInt, getRandomFloat } from '../core';
import { randomLocation } from '../generators';

export const randomBoid = state =>
  createBoid(
    Object.assign(
      {},
      {
        maxSpeed: 5,
        location: randomLocation(state.boundaries),
        acceleration: angleToVector(getRandomInt(360), 5),
      },
    ),
  );

export const randomBoids = (state, n) =>
  Array(n)
    .fill(null)
    .map(randomBoid.bind(null, state));
