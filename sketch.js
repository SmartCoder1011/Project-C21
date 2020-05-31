var bullet, wall;
var thickness,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  bullet = createSprite(50,200,70,50)
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  
  
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    
  }
  if(damage<10){
    bullet.shapeColor="green";
  }else if(damage>=10){
    bullet.shapeColor="red"
  }
  console.log(damage);
  drawSprites();
}