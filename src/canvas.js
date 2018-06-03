const get2DContext = canvas => canvas.getContext('2d');

const invertYCoordinates = canvas =>
  get2DContext(canvas).transform(1, 0, 0, -1, 0, canvas.height);

const clearCanvasForRepaint = canvas =>
  get2DContext(canvas).clearRect(0, 0, canvas.width, canvas.height);

export { invertYCoordinates, clearCanvasForRepaint };