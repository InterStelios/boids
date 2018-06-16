import { init } from "./bootstrap";
import { state } from "./initialState";
import { clearCanvasForRepaint } from "./canvas";
import { randomBoids } from "./boid/generators";
import { drawBoid, updateBoid } from "./boid";
import { drawAxis } from "./axis";
import { drawBall, updateBall } from "./ball";

init(canvas => {
  const initState = {
    boundaries: {
      x: canvas.width,
      y: canvas.height
    }
  };

  let nextState = state(
    {
      target: updateBall(initState),
      boids: randomBoids(initState, 2000)
    },
    initState
  );

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

  (function step() {
    clearCanvasForRepaint(canvas);
    nextState = Object.assign({}, nextState, {
      boids: nextState.boids.map(boid => updateBoid(boid, nextState))
    });

    drawAxis(canvas, nextState);
    nextState.boids.forEach(drawBoid(canvas));
    drawBall(canvas, nextState);

    requestAnimationFrame(step);
  })();
});
