
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var r

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
r=createSprite(width/2,400,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



