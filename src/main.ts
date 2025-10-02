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

// --- Create the custom lemon shape using Konva.Path ---
// This is the best method to create a non-symmetrical, organic shape.
const lemon = new Konva.Path({
  x: stage.width() / 2,
  y: stage.height() / 2,
  // The 'data' string defines the shape using SVG path commands.
  // It's like using a pen tool to draw the exact curves from your image.
  // M = Move To, C = Cubic Bezier Curve
  data: 'M 25 10 C -30 -50, 40 -65, 70 -20 C 100 25, 25 55, 25 10',
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 8, // Thicker stroke to match the hand-drawn look
  scaleX: 2.2,    // Scale the shape up to be more visible
  scaleY: 2.2,
  closed: true,   // Ensure the shape is a single, closed object
});


// Add the single custom shape to the layer
layer.add(lemon);

// add the layer to the stage
stage.add(layer);
