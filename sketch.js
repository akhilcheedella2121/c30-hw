function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  slingshot = new SlingShot(stone.body,{x:190,y:50});
}

function draw() {
  background(255,255,255);    
stone1=new Stone(20,20)
box1=new box(600,20,10,10) 
box2=new box(610,20,10,10) 
box3=new box(620,20,10,10) 
box4=new box(630,20,10,10) 
box5=new box(640,20,10,10) 
box6=new box(650,20,10,10) 
box7=new box(660,20,10,10) 
box8=new box(670,20,10,10) 
box9=new box(680,20,10,10) 
box10=new box(690,20,10,10) 
box11=new box(610,30,10,10) 
box12=new box(690,30,10,10) 
box13=new box(640,30,10,10) 
box14=new box(640,40,10,10) 
box15=new box(640,50,10,10) 
box16=new box(640,60,10,10) 
box17=new box(640,70,10,10) 
if(stone.isTouching(box1)){
  box1.isStatic;false
  box1.destroy()
}
if(stone.isTouching(box2)){
  box2.isStatic;false
  box2.destroy()
}
if(stone.isTouching(box3)){
  box3.isStatic;false
  box3.destroy()
}
if(stone.isTouching(box4)){
  box4.isStatic;false
  box1.destroy()
}
if(stone.isTouching(box5)){
  box5.isStatic;false
  box5.destroy()
}
if(stone.isTouching(box6)){
  box6.isStatic;false
  box6.destroy()
}
if(stone.isTouching(box7)){
  box7.isStatic;false
  box7.destroy()
}
if(stone.isTouching(box8)){
  box8.isStatic;false
  box8.destroy()
}if(stone.isTouching(box9)){
  box9.isStatic;false
  box9.destroy()
}if(stone.isTouching(box10)){
  box10.isStatic;false
  box10.destroy()
}if(stone.isTouching(box11)){
  box11.isStatic;false
  box11.destroy()
}
if(stone.isTouching(box12)){
  box12.isStatic;false
  box12.destroy()
}
if(stone.isTouching(box13)){
  box13.isStatic;false
  box13.destroy()
}
if(stone.isTouching(box14)){
  box14.isStatic;false
  box14.destroy()
}
if(stone.isTouching(box15)){
  box15.isStatic;false
  box15.destroy()
}
if(stone.isTouching(box16)){
  box16.isStatic;false
  box16.destroy()
}
if(stone.isTouching(box17)){
  box17.isStatic;false
  box17.destroy()
}
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();

}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.stone)
  }
}