export const drawAxis = (canvas, state) => {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, state.boundaries.y / 2);
  ctx.lineTo(state.boundaries.x, state.boundaries.y / 2);
  ctx.strokeStyle = "greenyellow";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(state.boundaries.x / 2, 0);
  ctx.lineTo(state.boundaries.x / 2, state.boundaries.y);
  ctx.strokeStyle = "greenyellow";
  ctx.stroke();
};
