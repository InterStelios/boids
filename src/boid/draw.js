export const drawBoid = canvas => boid => {
  const { size, location, direction } = boid;
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.translate(location.x, location.y);
  ctx.rotate(direction);
  ctx.beginPath();
  ctx.moveTo(-size / 4, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(size / 4, 0);
  ctx.fillStyle = "greenyellow";
  ctx.fill();
  ctx.restore();
};
