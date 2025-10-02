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

// --- Create a group to hold all the lemon parts ---
// This lets us position and rotate them all together.
const lemonGroup = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
  rotation: -15, // Give the lemon a slight tilt
});

// 1. Create the main body, making it a bit more oval
const lemonBody = new Konva.Ellipse({
  x: 0, // Position is relative to the group's center
  y: 0,
  radiusX: 100,
  radiusY: 60, // A little flatter than before
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
});

// 2. Create a smaller bump on one end
const leftBump = new Konva.Circle({
  x: -98, // Positioned near the left edge of the ellipse
  y: 8,   // Shifted slightly down to look more natural
  radius: 14,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
});

// 3. Create a larger, more prominent bump on the other end
const rightBump = new Konva.Circle({
  x: 95, // Positioned near the right edge
  y: -6, // Shifted slightly up
  radius: 18,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
});

// Add the shapes to the group (order matters for stroke overlap)
lemonGroup.add(lemonBody);
lemonGroup.add(leftBump);
lemonGroup.add(rightBump);

// Finally, add the single group to the layer
layer.add(lemonGroup);

// add the layer to the stage
stage.add(layer);