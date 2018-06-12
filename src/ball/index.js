import { randomLocation } from '../generators';

export const updateBall = state => randomLocation(state.boundaries);

export const drawBall = (canvas, state) => {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(state.target.x, state.target.y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'yellowgreen';
  ctx.fill();
};
