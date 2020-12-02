function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="green"
  rect1.debug=true
  rect2=createSprite(400, 200, 100, 50);
  rect2.shapeColor="green"
  rect2.debug=true
}

function draw() {
  background(0);
  rect2.x=mouseX
  rect2.y=mouseY

  if(rect2.x-rect1.x<=rect1.width/2+rect2.width/2
    &&rect1.x-rect2.x<=rect1.width/2+rect2.width/2
      &&rect2.y-rect1.y<=rect1.height/2+rect2.height/2
      &&rect1.y-rect2.y<=rect1.height/2+rect2.height/2){

      
    rect1.shapeColor="lightblue"
    rect2.shapeColor="lightblue"
  }
  else{
    rect1.shapeColor="lightgreen"
    rect2.shapeColor="lightgreen"
  }
  drawSprites();
}