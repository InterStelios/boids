import { createBoid } from "./model";
import { randomLocation } from "../generators";

export const randomBoid = state =>
  createBoid(
    Object.assign(
      {},
      {
        maxSpeed: 7,
        location: randomLocation(state.boundaries)
      }
    )
  );

export const randomBoids = (state, n) =>
  Array(n)
    .fill(null)
    .map(randomBoid.bind(null, state));
