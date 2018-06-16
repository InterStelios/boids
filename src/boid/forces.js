import { addVectors, subtractVectors } from "../core";

export const seek = (boid = {}) => {
  const {
    target,
    location,
    velocity,
    acceleration,
    maxSpeed,
    maxSteerForce
  } = boid;
  if (target) {
    const desired = subtractVectors(target, location, maxSpeed);
    const steer = subtractVectors(desired, velocity, maxSteerForce);
    const nextAcceleration = addVectors(acceleration, steer);

    return Object.assign(boid, {
      acceleration: nextAcceleration
    });
  }
  return boid;
};
