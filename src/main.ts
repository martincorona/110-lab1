import Konva from 'konva';

// create stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

// create layer
const layer = new Konva.Layer();
stage.add(layer);

// --- Group for lemon ---
const lemonGroup = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
});

// Use a custom shape with Bezier-like smooth lines
const lemonShape = new Konva.Line({
  points: [
    -60, 0,   // left
    -20, -50, // top-left curve
    40, -40,  // top-right curve
    60, 0,    // right
    20, 50,   // bottom-right curve
    -40, 40,  // bottom-left curve
  ],
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 6,
  closed: true,
  tension: 0.6, // makes it smooth/curvy
});

lemonGroup.add(lemonShape);
layer.add(lemonGroup);
stage.add(layer);
