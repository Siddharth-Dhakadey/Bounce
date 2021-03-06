var fixrect, movrect
var fr2,fr3,fr4,fr5;
var ob1, ob2;

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(700, 200, 50, 50);
fixrect.velocityX=-3;
fixrect.shapeColor="orange";
  movrect=createSprite(100,100,50,50);
  fr2=createSprite(200,350,50,50);
  fr2.velocityY=-3;
  fr3=createSprite(100,200,50,50);
  fr3.velocityX=3;
  fr4=createSprite(300,200,50,50);
  fr5=createSprite(200,50,50,50);
  fr5.velocityY=3;
}

function draw() {
  background(140,51,16);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  console.log(fixrect.y-movrect.y);
  touch(movrect,fixrect);
  touch(movrect,fr2);
  touch(movrect, fr3);
  touch(movrect, fr4);
  bounce(fr3, fixrect);
  drawSprites();
}
