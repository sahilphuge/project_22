const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;


function preload() {
 backgroundImg = loadImage("/assets/background.gif")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,598,1200,1)
 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
 
  Engine.update(engine);
 ground.show() 
   
}
