//Variable Declarations
let eyeSize = 20;

//End of Variable Declarations

function setup() {
  //This function get run once at the start of the program
  createCanvas(400, 400);
  background(240);
  //Set the number of frames per second
  frameRate(2);
}

function draw() {
  //This loop gets run over and over again
  noStroke();
  //Head
  fill(150, 99, 12);
  ellipse(200, 200, 200, 200);

  //Eyes
  fill(0);
  ellipse(240, 180, eyeSize, eyeSize);
  ellipse(160, 180, eyeSize, eyeSize);

  //Mouth
  fill(255);
  ellipse(200, 240, 120, 50);
  fill(255, 0, 0); // red=255 green=0 blue=0
  ellipse(200, 250, 90, 20);

  //Nose
  strokeWeight(5);
  stroke(0);
  point(210, 230);
  point(190, 230);

  //give the eyeSize variable a new value
  // eyeSize = random(100);
}
