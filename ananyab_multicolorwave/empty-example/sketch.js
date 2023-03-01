
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let c = 0;

function setup() {
  createCanvas(1910, 600);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
  renderWave2();
  renderWave3();
  renderWave4();
  renderWave5();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += -0.03;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = tan(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(mouseX, mouseY, 150);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}

function renderWave2() {
  noStroke();
  fill(mouseY, mouseX, 200);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing * 1.5, height / 2 + yvalues[x] + 50, 10, 10);
  }
}

function renderWave3() {
  noStroke();
  fill(mouseX, mouseY, 250);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x] + 100, 16, 16);
  }
}

function renderWave4() {
  noStroke();
  fill(c, c, c);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing * 3, height / 2 + yvalues[x] - 50, 20, 20);
  };
  c = color(random (255), random(255), random(255));
}

function renderWave5() {
  noStroke();
  fill(mouseX, mouseY, 50);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x] - 100, 16, 16);
  }
}