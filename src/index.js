import { init } from "./bootstrap";
import { state } from "./initialState";
import { clearCanvasForRepaint } from "./canvas";
import { randomBoids } from "./boid/generators";
import { drawBoid, updateBoid } from "./boid";
import { drawAxis } from "./axis";
import { drawBall, updateBall } from "./ball";

init(canvas => {
  const initState = state();
  let nextState = state({
    target: updateBall(initState),
    boids: randomBoids(initState, 1500)
  });

  const getMousePos = canvas => evt => {
    const rect = canvas.getBoundingClientRect();
    nextState = Object.assign({}, nextState, {
      target: {
        x: Math.floor(evt.clientX - rect.left),
        y: Math.floor(Math.abs(evt.clientY - rect.top - canvas.height))
      }
    });
  };

  canvas.addEventListener("click", getMousePos(canvas), false);

  setInterval(() => {
    nextState = Object.assign({}, nextState, {
      target: updateBall(nextState)
    });
  }, 2000);

  setInterval(() => {
    clearCanvasForRepaint(canvas);
    nextState = Object.assign({}, nextState, {
      boids: nextState.boids.map(boid => updateBoid(boid, nextState))
    });

    drawAxis(canvas, nextState);
    nextState.boids.forEach(drawBoid(canvas));
    drawBall(canvas, nextState);
  }, 16);
});
