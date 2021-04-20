
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var polygon, polygon_image

function preload()
{
	polygon_image = loadImage("images/polygon.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	ground = new Ground(790, 600, 400, 15)

	block = new Box(640, 500, 40, 40)
	block2 = new Box(690, 500, 40, 40)
	block3 = new Box(740, 500, 40, 40)
	block4 = new Box(790, 500, 40, 40)
	block5 = new Box(840, 500, 40, 40)
	block6 = new Box(890, 500, 40, 40)
	block7 = new Box(940, 500, 40, 40)
	block8 = new Box(660, 400, 40, 40)
	block9 = new Box(710, 400, 40, 40)
	block10 = new Box(760, 400, 40, 40)
	block11 = new Box(810, 400, 40, 40)
	block12 = new Box(860, 400, 40, 40)
	block13 = new Box(910, 400, 40, 40)
	block14 = new Box(680, 350, 40, 40)
	block15 = new Box(730, 350, 40, 40)
	block16 = new Box(780, 350, 40, 40)
	block17 = new Box(830, 350, 40, 40)
	block18 = new Box(880, 350, 40, 40)
	block19 = new Box(700, 300, 40, 40)
	block20 = new Box(750, 300, 40, 40)
	block21 = new Box(800, 300, 40, 40)
	block22 = new Box(850, 300, 40, 40)
	block23 = new Box(720, 250, 40, 40)
	block24 = new Box(770, 250, 40, 40)
	block25 = new Box(820, 250, 40, 40)
	block26 = new Box(770, 200, 30, 40)
	//block27 = new Box(790, 200, 40, 40)
	//block25 = new Box(820, 250, 40, 40)

	polygon = Bodies.circle(500, 300, 100)
	//fill("white")
	World.add(world, polygon)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  block.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  //polygon.display()
  //block27.display()

}



