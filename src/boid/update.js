import { addVectors, direction } from '../core';
import { seek } from './forces';

const wrap = (location, state) => ({
  x: location.x % state.boundaries.x,
  y: location.y % state.boundaries.y,
});

const move = (boid, state) => {
  const nextDirection = direction(boid.velocity);
  const nextVelocity = addVectors(
    boid.velocity,
    boid.acceleration,
    boid.maxSpeed,
  );

  const nextLocation = addVectors(boid.location, nextVelocity);
  const nextWrappedLocation = wrap(nextLocation, state, boid.size);

  return Object.assign(boid, {
    velocity: nextVelocity,
    direction: nextDirection,
    location: nextLocation,
  });
};

const updateTarget = (boid, state) =>
  state.target
    ? Object.assign({}, boid, {
        target: state.target,
      })
    : state;

const update = state => (boid, force) =>
  Object.assign({}, boid, force(boid, state));

export const updateBoid = (boid, state) =>
  [updateTarget, seek, move].reduce(update(state), boid);
