const shape = document.getElementById('shape');
let currentShapeIndex = 0;
const shapes = ['circle', 'square'];

document.getElementById('red-slider').addEventListener('input', updateColor);
document.getElementById('green-slider').addEventListener('input', updateColor);
document.getElementById('blue-slider').addEventListener('input', updateColor);

function prevShape() {
  currentShapeIndex = (currentShapeIndex - 1 + shapes.length) % shapes.length;
  updateShape();
}

function nextShape() {
  currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
  updateShape();
}

function updateShape() {
  const selectedShape = shapes[currentShapeIndex];
  shape.style.borderRadius = selectedShape === 'circle' ? '50%' : '0';
}

function updateColor() {
  const red = document.getElementById('red-slider').value;
  const green = document.getElementById('green-slider').value;
  const blue = document.getElementById('blue-slider').value;

  shape.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
