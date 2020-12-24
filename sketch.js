const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 
function setup() {
  createCanvas(1422, 800);
  engine = Engine.create();
  world = engine.world;
 
  //create the polygon
  polygon = new Polygon(200, 350, 80, 80)
 
  //create the chain
  chain = new Chain(polygon.body,{x : 150, y : 350})
 
  //create a ground
  ground = new Ground(711, 792, width, 20)
 
  //create the Holders
  holder1 = new Ground(600, 500, 250, 20)
  holder2 = new Ground(1010, 300, 230, 20);
 
  //create the blocks of first row in holder 1
  block1 = new Block(500, 450, 40, 60, rgb(0, 188, 255))
  block2 = new Block(540, 450, 40, 60, rgb(0, 188, 255))
  block3 = new Block(580, 450, 40, 60, rgb(0, 188, 255))
  block4 = new Block(620, 450, 40, 60, rgb(0, 188, 255))
  block5 = new Block(660, 450, 40, 60, rgb(0, 188, 255))
  block6 = new Block(700, 450, 40, 60, rgb(0, 188, 255))
 
  //create the blocks of second row in holder 1
  block7 = new Block(540, 375, 40, 60,"cyan")
  block8 = new Block(580, 375, 40, 60, "cyan")
  block9 = new Block(620, 375, 40, 60,"cyan")
  block10 = new Block(660, 375, 40, 60,"cyan")
 
  //create the blocks of third row in holder 1
  block11 = new Block(580, 300, 40, 60, rgb(109, 255, 232))
  block12 = new Block(620, 300, 40, 60, rgb(109, 255, 232))
 
  //create the blocks of fourth row in holder 1
  block13 = new Block(600, 200, 40, 60, rgb(189, 239, 186))
 
  //create the blocks of first row in holder 2
  block14 = new Block(930, 200, 40, 60, rgb(0, 188, 255))
  block15 = new Block(970, 200, 40, 60, rgb(0, 188, 255))
  block16 = new Block(1010, 200, 40, 60, rgb(0, 188, 255))
  block17 = new Block(1050, 200, 40, 60, rgb(0, 188, 255))
  block18 = new Block(1090, 200, 40, 60, rgb(0, 188, 252))

  //create the blocks of second row in holder 2
  block19 = new Block(970, 50, 40, 60,"cyan")
  block20 = new Block(1010, 50, 40, 60,"cyan")
  block21 = new Block(1050, 50, 40, 60, "cyan")

  //create the blocks of second row in holder 2
  block22 = new Block(1010, -0, 40, 60, rgb(109, 255, 232))
} 
 
function draw() {
  rectMode(CENTER)
  background(0);
  Engine.update(engine);
  polygon.display();
  chain.display();
  ground.display();
  holder1.display();
  holder2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})
}

function mouseReleased() {
   chain.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    chain.attach(polygon.body)
  }
}
 
