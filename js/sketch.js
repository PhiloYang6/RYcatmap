let cat;
let map;
let ellipseX = 900;
let ellipseY = 500;
let bathroomdoor;

function setup(){
   createCanvas(windowWidth, windowHeight);
}
function draw() {
  image(map,-20,-40,1400,900);
  image(elevator,100,700,70,70);
  //lastGIF.position(1050, 10,10,10);
  rainbowgif.position(800, 500);
  catBrush();
  //last
  {
    ellipseX = 380;
    ellipseY = 310;
  }
  fill(255, 204, 0);
ellipse(ellipseX, ellipseY, 40, 40);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
  lastgif.position(350, 250);
}
//bathroomdoor
{
  ellipseX = 380;
  ellipseY = 680;
}
fill(255, 204, 30);
ellipse(ellipseX, ellipseY, 60, 60);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
image(bathroomdoor,350,600,130,130);
}
//Automatic door
{
  ellipseX = 560;
  ellipseY =760;
}
fill(255, 204, 30);
ellipse(ellipseX, ellipseY, 40, 40);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
image(automaticdoor,520,660,180,180);
}
//revolvingdoor
{
  ellipseX = 1060;
  ellipseY =380;
}
fill(255, 204, 30);
ellipse(ellipseX, ellipseY, 80, 80);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
image(revolvingdoor,1000,280,180,180);
}
//win
{
  ellipseX = 1200;
  ellipseY =130;
}
fill(255, 204, 30);
ellipse(ellipseX, ellipseY, 50, 50);
if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
image(win,1100,90,180,180);
}
}
function keyPressed(){
  if(keyCode === 80){
    strokeWeight(10);
    stroke(255, 204, 0);
    line(200, 350, 1400, 10);
    strokeWeight(1);
    text("Fast Track Got!!", 950, 100);

   }
  }
function preload(){
  map = loadImage("image/map.png");
  elevator = loadImage("image/elevator.jpg");
  rainbowgif = createImg("image/rainbow.gif");
  lastgif = createImg("image/last.gif");
    cat = loadImage("image/cat.png");
    bathroomdoor = loadImage("image/bathroomdoor.jpg");
    automaticdoor = loadImage("image/automaticdoor.jpg");
    revolvingdoor = loadImage("image/revolvingdoor.jpg");
    win = loadImage("image/win.jpg");
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function catBrush() {
  image(cat, mouseX, mouseY, 80, 80);

}
