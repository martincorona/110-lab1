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
const lemon = new Konva.Path({
  x: stage.width() / 2,
  y: stage.height() / 2,
  data: `
    M -100, 0
    Q 0 -90, 100 0
    Q 0 90, -100 0
  `,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 6,
  scaleX: 1.5,
  scaleY: 1.5,
  closed: true,
  // --- MAKE THE lemon DRAGGABLE ---
  draggable: true,
});

layer.add(lemon);

// --- EVENT HANDLING & ANIMATIONS ---

// 1. Change cursor to a pointer on hover
lemon.on('mouseover', function () {
  stage.container().style.cursor = 'pointer';
});

// 2. Change cursor back to default when not hovering
lemon.on('mouseout', function () {
  stage.container().style.cursor = 'default';
});


// 4. [Optional Challenge] Wiggle animation setup
// We define the animation outside the event handler so we can start/stop it.
const wiggleAnimation = new Konva.Animation((frame) => {
  if (!frame) return;
  // Use a sine wave to create a smooth back-and-forth rotation
  const angle = 5; // Max wiggle angle in degrees
  const period = 200; // Time in ms for a full wiggle cycle
  const rotation = angle * Math.sin((frame.time * 2 * Math.PI) / period);
  lemon.rotation(rotation);
}, layer);


// 3. Scale up and start wiggling on click/hold
lemon.on('mousedown', () => {
  // Use Konva.Tween for a smooth scaling animation
  new Konva.Tween({
    node: lemon,
    duration: 0.1, // A quick, responsive animation
    scaleX: 1.7,   // The target scale (slightly larger than 1.5)
    scaleY: 1.7,
    easing: Konva.Easings.EaseInOut,
  }).play();

  // Start the wiggle animation
  wiggleAnimation.start();
});

// 3. Revert size and stop wiggling on release
lemon.on('mouseup', () => {
  // Tween back to the original size
  new Konva.Tween({
    node: lemon,
    duration: 0.1,
    scaleX: 1.5, // The original scale
    scaleY: 1.5,
    easing: Konva.Easings.EaseInOut,
  }).play();

  // Stop the wiggle animation
  wiggleAnimation.stop();

  // Smoothly reset the lemon' rotation back to 0
  new Konva.Tween({
      node: lemon,
      duration: 0.2,
      rotation: 0,
      easing: Konva.Easings.EaseInOut
  }).play();
});


// add the layer to the stage
stage.add(layer);

