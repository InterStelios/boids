import { defaultVector } from '../core/defaults';
const defaultProps = {
  maxSpeed: 1,
  acceleration: defaultVector,
  direction: 0,
  location: defaultVector,
  desiredLocation: null,
  size: 20,
  velocity: defaultVector,
};

export const createBoid = (props = {}) =>
  Object.assign({}, defaultProps, props);
