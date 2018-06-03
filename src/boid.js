import { addVectors, direction } from './core';

const createBoid = ({
  acceleration = { x: 0, y: 0 },
  direction = 0,
  location = { x: 0, y: 0 },
  size = 30,
  velocity = { x: 0, y: 0 },
} = {}) => ({
  acceleration,
  direction,
  location,
  size,
  velocity,
});

const wrap = (location, boundaries) => ({
  x: location.x % boundaries.x,
  y: location.y % boundaries.y,
});

const nextBoidMove = (boid = { x: 0, y: 0 }, boundaries = { x: 0, y: 0 }) =>
  Object.assign(boid, {
    direction: direction(boid.velocity),
    location: wrap(addVectors(boid.location)(boid.velocity), boundaries),
  });

const drawBoid = canvas => (boid = null) => {
  if (boid === null) {
    return;
  }
  const { size, location, direction } = boid;
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.translate(location.x, location.y);
  ctx.rotate(direction);
  ctx.beginPath();
  ctx.moveTo(-size / 4, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(size / 4, 0);
  ctx.fillStyle = 'greenyellow';
  ctx.fill();
  ctx.restore();
};

export { createBoid, nextBoidMove, drawBoid };
