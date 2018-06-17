import { init } from "./bootstrap";
import { initialState } from "./initialState";
import { clearCanvasForRepaint, getMousePosition } from "./canvas";
import { drawBoid, updateBoid } from "./boid";
import { drawAxis } from "./axis";
import { drawBall, updateBall } from "./ball";

init(canvas => {
  let nextState = initialState(canvas);
  const setTarget = canvas => evt => {
    nextState = Object.assign({}, nextState, {
      target: getMousePosition(canvas)(evt)
    });
  };

  // Subscriptions
  canvas.addEventListener("click", setTarget(canvas), false);
  setInterval(() => {
    nextState = Object.assign({}, nextState, {
      target: updateBall(nextState)
    });
  }, 5000);

  // Simulation loop
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
