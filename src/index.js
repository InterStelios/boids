import { init } from './bootstrap';
import { state } from './initialState';
import { drawBoid, updateBoid } from './boid';

import { drawAxis } from './axis';
import { clearCanvasForRepaint } from './canvas';
import { randomBoids } from './boid/generators';

init(canvas => {
  let nextState = state({
    boids: randomBoids(state(), 3),
  });

  const getMousePos = canvas => evt => {
    const rect = canvas.getBoundingClientRect();
    window.d = {
      x: evt.clientX - rect.left,
      y: Math.abs(evt.clientY - rect.top - canvas.height),
    };
  };

  canvas.addEventListener('click', getMousePos(canvas), false);
  setInterval(() => {
    clearCanvasForRepaint(canvas);
    nextState = Object.assign(nextState, {
      boids: nextState.boids.map(boid => updateBoid(boid, nextState)),
    });
    drawAxis(canvas, nextState);
    nextState.boids.forEach(drawBoid(canvas));
  }, 16);
});
