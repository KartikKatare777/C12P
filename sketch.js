var man,man_running,edges;
var path;
var wall;
var wall2;
function preload(){
  //pre-load images
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  wall = createSprite(24,205,60,500);
  wall2 = createSprite(380,205,60,500);
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY =4;
  man = createSprite(200,300,20,20)
  man.addAnimation("Running",man_running);
  edges = createEdgeSprites();
  man.scale = 0.1

  wall.visible = false;
  wall2.visible = false;
}

function draw() {
  background(0);

  if (path.y >400){
    path.y = height/2;
  }

  man.x = World.mouseX;
  if (man.x>400)
  {
    man.x = 400;
  }

  man.bounce(wall);
  man.bounce(wall2);

wall.visible = false;

  drawSprites();
}