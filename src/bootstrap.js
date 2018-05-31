function configureBody({
  width = '100%',
  height = '100%',
  colour = 'black',
} = {}) {
  window.document.body.style.background = colour;
  window.document.body.style.width = width;
  window.document.body.style.height = height;
}

function configureCanvas({
  width = 800,
  height = 600,
  colour = 'black',
  border = 'dotted thin greenyellow',
} = {}) {
  const canvas = window.document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.border = border;
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = colour;
  ctx.fillRect(0, 0, width, height);
  window.document.body.appendChild(canvas);
}

export { configureBody, configureCanvas };
