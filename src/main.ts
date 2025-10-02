import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// --- Create the custom lips shape using Konva.Path ---
const lips = new Konva.Path({
  x: stage.width() / 2,
  y: stage.height() / 2,
  // This 'data' string defines the outline of the lips.
  // M = Move To, Q = Quadratic Bezier Curve
  data: `
    M -100, 0
    Q 0 -90, 100 0
    Q 0 90, -100 0
  `,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 6,
  scaleX: 1.5, // Scale the shape to make it larger
  scaleY: 1.5,
  closed: true, // This is crucial for filling the shape correctly
});

// Add the custom lips shape to the layer
layer.add(lips);

// add the layer to the stage
stage.add(layer);
