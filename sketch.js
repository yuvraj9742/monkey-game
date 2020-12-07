
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
}


function draw() {
  background(180)
  
 
  
  
  
  
  
  drawSprites();

  
}

function spawnObstacles(){
  if(frameCount%60==-0){
    obstacle=createSprite(600,165,10,40)
    obstacle.velocityX=-(6+score/100)
  
  
  obstacle.addImage(obstacleImage)
  }
  obstacle.scale=0.5
  obstacle.lifeTime=300
  
foodGroup.add(obstacle)
  
  
}





