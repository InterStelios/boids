import { addVectors, subtractVectors } from '../core';
const steer = (boid = {}) => {
  const { desiredLocation, location, velocity, acceleration } = boid;
  if (desiredLocation) {
    const desired = subtractVectors(desiredLocation, location, 4);
    const steer = subtractVectors(desired, velocity, 0.1);
    const nextAcceleration = addVectors(acceleration, steer);

    return Object.assign(boid, {
      acceleration: nextAcceleration,
    });
  }
  return boid;
};

export { steer };
