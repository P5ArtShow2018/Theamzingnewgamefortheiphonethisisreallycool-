var x1 = 100;
var y1 = 100;
var x2 = 50;
var y2 = 50;

xPosition = 100

function preload() {
 Henrik = loadImage ("assets/Henrik.png")
  
}
function setup() {
  createCanvas (windowWidth, windowHeight);
   background (0,255,0); 
 
} 

function draw() {
  //background (0,255,0); 
  image (Henrik, mouseX,mouseY,50,50)
}
function mousePressed(){
   background (0,255,0);
}
 function windowResized(){
   resizeCavas (windowWidth, windowHeight);
 }