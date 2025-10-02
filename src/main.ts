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

// --- create our shape ---
// To create this exact custom shape, we must use Konva.Path,
// which draws a shape based on SVG path commands.

const lemon = new Konva.Path({
  x: stage.width() / 2,
  y: stage.height() / 2,
  // The 'data' string defines the custom shape.
  // M = Move To a point
  // C = Draw a Cubic Bezier curve to a new point
  data: 'M 0 -5 C -50 -50, 50 -70, 70 -10 C 90 50, -10 55, 0 -5',
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 8, // Increased stroke width to better match the image
  scaleX: 2.5,   // Made the shape larger and wider
  scaleY: 2.5,
  offsetX: 35,   // Centering adjustments
  offsetY: -25,
});

// add the shape to the layer
layer.add(lemon);

// add the layer to the stage
stage.add(layer);

