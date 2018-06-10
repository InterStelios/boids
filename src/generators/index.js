export const randomLocation = boundaries => ({
  x: Math.floor(Math.random() * boundaries.x),
  y: Math.floor(Math.random() * boundaries.y),
});
