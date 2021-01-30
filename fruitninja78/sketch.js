var PLAY = 1;
var END = 0;
var gameState = 1;

var sword,swordImage;
  var enemy,enemy1,enemy2,enemyImage;
  var    fruit1,fruit2,fruit3,fruit4;
var gameOver,gameOverImage;
var score = 0;
var fruitGroup,enemyGroup;

function preload(){
  swordImage = loadImage ("sword.png")
  
 enemy1 = loadImage ("alien1.png")
  enemy2 = loadImage ("alien2.png")
  
  fruit1 =  loadImage ("fruit1.png")
  fruit2 = loadImage ("fruit2.png")
  fruit3 = loadImage ("fruit3.png")
  fruit4 = loadImage ("fruit4.png")
  gameOverImage = loadImage("gameover.png");
}

function setup() {
  createCanvas(600, 600);
  
  sword = createSprite(40,200,20,20);
  sword.addImage (swordImage)
 sword.scale = 0.7;
  fruitGroup = createGroup();
enemyGroup = createGroup();
  gameOver = createSprite(300, 300, 10, 10);
gameOver.addImage("fail", gameOverImage);
gameOver.visible = false;
  
  
  
  
}

function draw(){
  background("lightblue");
  if (gameState === PLAY) {
 sword.y = World.mouseY;
  sword.x = World.mouseX;
     fruits();
    Enemy();
    
   text("Score:"+score, 200, 50);
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score = score+2;
       }
    if(sword.isTouching(enemyGroup)) {
  gameState = END;
  }
    
}
else if (gameState === END) {
sword.x = 200;
sword.y = 200;
gameOver.visible = true;
fruitGroup.destroyEach();
enemyGroup.destroyEach();

}
  drawSprites();
}
   
  
 


function fruits(){
  if (World.frameCount%80===0){
    fruit = createSprite(400,200,20,20)
    fruit.scale = 0.2;
  
    r=Math.round(random(1,4))
    if ( r==1 ){
      fruit.addImage (fruit1);
      }else if (r==2){
        fruit.addImage (fruit2);
   }else if (r==3){
     fruit.addImage (fruit3);
   }else{
     fruit.addImage (fruit4);
   }
    fruit.y = Math.round(random(50,340));
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    fruitGroup.add(fruit);
  }
  
}
function Enemy() {
if (World.frameCount%200 === 0) {
enemy= createSprite(400, 200, 20, 20);
ran = Math.round(random(1,2))
if (ran === 1) {
  enemy.addImage("alien1", enemy1)
}
else if(ran === 2) {
  enemy.addImage("alien2", enemy2)
}
enemy.y = Math.round(random(100, 300));
enemy.velocityX = -8;
enemy.setLifetime = 50;
enemyGroup.add(enemy);
}
}




















