import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create our shape

const lemonBody = new Konva.Ellipse({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radiusX: 100, // horizontal radius (makes it wider)
  radiusY: 65,  // vertical radius (makes it shorter)
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

const leftBump = new Konva.Circle({
  x: stage.width() / 2 - 100, // position it at the left edge of the ellipse
  y: stage.height() / 2,
  radius: 15,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

const rightBump = new Konva.Circle({
  x: stage.width() / 2 + 100, // position it at the right edge of the ellipse
  y: stage.height() / 2,
  radius: 15,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(lemonBody);
layer.add(leftBump);
layer.add(rightBump);

// add the layer to the stage
stage.add(layer);

