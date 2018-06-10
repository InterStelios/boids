import { addVectors, subtractVectors } from '../core';

export const seek = (boid = {}) => {
  const { desiredLocation, location, velocity, acceleration, maxSpeed } = boid;
  if (desiredLocation) {
    const desired = subtractVectors(desiredLocation, location, maxSpeed);
    const steer = subtractVectors(desired, velocity, 0.1);
    const nextAcceleration = addVectors(acceleration, steer);

    return Object.assign(boid, {
      acceleration: nextAcceleration,
    });
  }
  return boid;
};
