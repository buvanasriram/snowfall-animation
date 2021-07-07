const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world, engine;
var snowArray = []

function preload(){
  bg = loadImage("snow2.jpg")
}


function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world;
ground = new Ground(400, 390, 1600, 10)
  
}

function draw() {
  background(bg);  
  Engine.update(engine);
  if (frameCount%50===0){
      snowArray.push(new Snow(random(50, 750), 0, 30))
  
  }
  for(var i = 0; i<snowArray.length; i++){
      snowArray[i].display();
  }
}
function mouseClicked() {
  snowArray.push(new Snow(mouseX, 0, 30))
}