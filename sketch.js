var sea,shark,fish,fish2,fish3,poison;
var seaImg,sharkImg,fishImg,fish2Img,fish3Img,poisonImg,endImg;
var score = 0;
var fishG,fish2G,fish3G,poisonGroup;


var PLAY;
var END;
var gameState;

function preload(){
  seaImg = loadImage("sea.jpg");
  sharkImg = loadAnimation("shark.png","shark2.png");
  fishImg = loadImage("fish.png");
  fish2Img = loadImage("fish2.png");
  fish3Img = loadImage("fish3.png");
  poisonImg = loadImage("poison.png");
  endImg =loadImage("gameOver.PNG");
  shark2 = loadImage("shark3.png")
}

function setup(){
  
  createCanvas(600,400);

sea = createSprite(1000,600);
sea.addImage(seaImg);
sea.velocityY = 4;

shark = createSprite(width/2,height,20,20);
shark.addAnimation("sharkSwim",sharkImg);
shark.addAnimation("sharkDead",shark2)
shark.scale=0.8;
  
gameOver = createSprite(300,100);
gameOver.addImage(endImg);
gameOver.visible = false;
  

fishG=new Group();
fish2G=new Group();
fish3G=new Group();
poisonGroup=new Group();

}

function draw() {
  

  if(gameState===PLAY){
  background(seaImg);
  shark.x = World.mouseX;
  
  edges= createEdgeSprites();
  shark.collide(edges);
  
  if(sea.y > height ){
    sea.y = height/2;
  }
  
    createFish();
    createFish2();
    createFish3();
    createPoison();

    if (fishG.isTouching(shark)) {
      fishG.destroyEach();
      score=score+50;
    }
    else if (fish2G.isTouching(shark)) {
      fish2G.destroyEach();
      score=score+30;
      
    }else if(fish3G.isTouching(shark)) {
      fish3G.destroyEach();
      score=score+20;

      
    }else{
      if(poisonGroup.isTouching(shark)) {
     
        shark.changeAnimation("sharkDead",shark2);
        poisonGroup.destroyEach();
        
        gameOver.visible = true;
        
        fishG.setVelocityYEach(0);
        fish2G.setVelocityYEach(0);
        fish3G.setVelocityYEach(0);
        poisonGroup.setVelocityYEach(0);
        
        
    }
  } 
  }
  
 
    
    
  
    
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,150,30);
  

}

function createFish() {
  if (World.frameCount % 510 == 0) {
  var fish = createSprite(Math.round(random(50, 350),40, 10, 10));
  fish.addImage(fishImg);
  fish.scale=0.3;
  fish.velocityY = 5;
  fish.lifetime = 150;
  fishG.add(fish);
  }
}

function createFish2() {
  if (World.frameCount % 400 == 0) {
  var fish2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fish2.addImage(fish2Img);
  fish2.scale=0.3;
  fish2.velocityY = 5;
  fish2.lifetime = 150;
  fish2G.add(fish2);
}
}

function createFish3() {
  if (World.frameCount % 360 == 0) {
  var fish3 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  fish3.addImage(fish3Img);
  fish3.scale=0.3;
  fish3.velocityY = 5;
  fish3.lifetime = 150;
  fish3G.add(fish3);
  }
}

function createPoison(){
  if (World.frameCount % 220 == 0) {
  var poison = createSprite(Math.round(random(50, width-50),40, 10, 10));
  poison.addImage(poisonImg);
  poison.scale=0.3;
  poison.velocityY = 5;
  poison.lifetime = 150;
  poisonGroup.add(poison);
  }
}