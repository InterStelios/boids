import { defaultVector } from "./defaults";

export const addVectors = (v1 = defaultVector, v2 = defaultVector, limit) =>
  limitMagnitude(
    {
      x: v1.x + v2.x,
      y: v1.y + v2.y
    },
    limit
  );

export const subtractVectors = (
  v1 = defaultVector,
  v2 = defaultVector,
  limit
) =>
  limitMagnitude(
    {
      x: v1.x - v2.x,
      y: v1.y - v2.y
    },
    limit
  );

export const direction = ({ x = 0, y = 0 } = {}) => -Math.atan2(x, y);

export const magnitude = ({ x = 0, y = 0 } = {}) =>
  Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

export const normalise = ({ x = 0, y = 0 } = {}) => {
  const mag = magnitude({ x, y });
  if (mag > 0) {
    return { x: x / mag, y: y / mag };
  }
  return { x, y };
};

export const toRadians = angle => (angle * Math.PI) / 180;

export const angleToVector = (angle, limit) =>
  limitMagnitude(
    {
      x: Math.cos(toRadians(angle)),
      y: Math.sin(toRadians(angle))
    },
    limit
  );

export const limitMagnitude = (
  { x = 0, y = 0 },
  limit = Number.MAX_SAFE_INTEGER
) => {
  const mag = magnitude({ x, y });
  if (mag > limit) {
    const normalised = normalise({ x, y });
    return { x: normalised.x * limit, y: normalised.y * limit };
  }
  return { x, y };
};

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getRandomFloat = max => Math.random() * max;
