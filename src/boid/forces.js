import { addVectors, subtractVectors } from "../core";

export const seek = (boid = {}) => {
  if (boid.target) {
    const desired = subtractVectors(boid.target, boid.location, boid.maxSpeed);
    const steer = subtractVectors(desired, boid.velocity, boid.maxSteerForce);
    const nextAcceleration = addVectors(boid.acceleration, steer);

    return Object.assign(boid, {
      acceleration: nextAcceleration
    });
  }
  return boid;
};
