import { init } from './bootstrap';
import { state } from './initialState';
import { drawBoid, nextBoidMove } from './boid';
import { clearCanvasForRepaint } from './canvas';
import { randomBoids } from './stateGenerators';

const initialState = state();

init(canvas => {
  let nextState = state({
    boids: randomBoids(initialState, 10),
  });
  setInterval(() => {
    clearCanvasForRepaint(canvas);
    nextState = Object.assign(nextState, {
      boids: nextState.boids.map(boid =>
        nextBoidMove(boid, nextState.boundaries),
      ),
    });
    nextState.boids.forEach(drawBoid(canvas));
  }, 16);
});
