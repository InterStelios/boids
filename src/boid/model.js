import { defaultVector } from "../core/defaults";
const defaultProps = {
  maxSpeed: 1,
  acceleration: defaultVector,
  direction: 0,
  location: defaultVector,
  target: null,
  maxSteerForce: 0.01,
  size: 10,
  velocity: defaultVector
};

export const createBoid = (props = {}) =>
  Object.assign({}, defaultProps, props);
