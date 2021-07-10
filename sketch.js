var nature,natureImg;
var bot,botImg;
var bolt,boltImg;
//Game States
var PLAY=1;
var END=0;
var gameState=1;




function preload(){
  natureImg = loadImage("assets/nature.gif");
  botImg = loadAnimation("assets/bot.gif");
  boltImg = loadAnimation("assets/bolt.gif");
  

}

function setup() {
  createCanvas(600,400)
  nature=createSprite(600,400);
  nature.addImage("nature",natureImg);
  nature.velocityX = -5;
  nature.x = nature.width /2;

  bot=createSprite(200,20,50,50);
  bot.addAnimation("bot",botImg);

}

function draw() {
  background(0);
 if (nature.x < 0){
      nature.x = nature.width/2;
    }
  
  
  drawSprite();
}

function spawnbolt(){
  function createCash() {
    if (World.frameCount % 200 == 0) {
    var bolt = createSprite(Math.round(random(50, 350),40, 10, 10));
    bolt.addImage(boltImg);
    bolt.scale=0.12;
    bolt.velocityY = 3;
    bolt.lifetime = 150;
    boltG.add(bolt);
    }
  }



  
}
