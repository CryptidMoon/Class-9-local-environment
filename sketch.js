var ball 
function setup() {
  createCanvas(2560,1285);
  ball=createSprite(1280,644.5,20,20)
}

function draw() 
{
  background(30);
  if (keyDown(UP_ARROW)){
    ball.y -=5
  }
  if (keyDown(DOWN_ARROW)){
    ball.y +=5
  }
  if (keyDown(LEFT_ARROW)){
  ball.x -=5
}
  if (keyDown(RIGHT_ARROW)){
  ball.x +=5
}
  drawSprites()
}




