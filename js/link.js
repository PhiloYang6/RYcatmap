let ellipseX = 900;
let ellipseY = 500;
let bathroomdoor;

function setup(){
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  if(mouseX > windowWidth/2 && mouseY < windowHeight/2){

    ellipseX = 900;
    ellipseY = 500;
  }
  fill(255, 204, 0);
ellipse(ellipseX, ellipseY, 100, 100);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
  image(bathroomdoor,200,300,70,70);
}
}

function preload(){
  bathroomdoor = loadImage("image/bathroomdoor.JPG");
}
