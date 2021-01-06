var car, wall;
var speed, weight;
function setup() {
  speed=random(55,90);
  weight=random(400,1500)
  
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor(80,80,80);
  car.velocityX= speed;
  
}

function draw() {
  background(black);
  drawSprites();
}