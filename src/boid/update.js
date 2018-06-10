import { addVectors, direction } from '../core';
import { steer } from './forces';

const wrap = (location, state) => ({
  x: location.x % state.boundaries.x,
  y: location.y % state.boundaries.y,
});

const move = (boid, state) => {
  const nextDirection = direction(boid.velocity);
  const nextVelocity = addVectors(boid.velocity, boid.acceleration, 4);
  const nextLocation = addVectors(boid.location, nextVelocity);
  const nextWrappedLocation = wrap(nextLocation, state, boid.size);

  return Object.assign(boid, {
    velocity: nextVelocity,
    direction: nextDirection,
    location: nextWrappedLocation,
  });
};

const applyForce = state => (boid, force) =>
  Object.assign({}, boid, force(boid, state));

export const updateBoid = (boid, state) =>
  [steer, move].reduce(applyForce(state), boid);
