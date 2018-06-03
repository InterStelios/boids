const vectorDefault = { x: 0, y: 0 };

export const addVectors = (v1 = vectorDefault) => (v2 = vectorDefault) => ({
  x: v1.x + v2.x,
  y: v1.y + v2.y,
});

export const direction = ({ x = 0, y = 0 } = {}) => -Math.atan2(x, y);
