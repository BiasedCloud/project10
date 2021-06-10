var sea;
var ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipbob = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

   


function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.scale = 0.25;
  sea.velocityX = -2;

  ship = createSprite(200,200,10,10);
  ship.addAnimation("shipbob",shipbob);
  ship.scale = 0.3

  
}



function draw() {
  background("lightblue");
  
  
  if(sea.x < 0) {
    sea.x = sea.width/8;
  }

  drawSprites();
}