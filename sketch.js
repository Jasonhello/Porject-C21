var ball;
var groundObj;
var leftSide, rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options= {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball= Bodies.circle(250,650,20, ball_options);
	World.add(world, ball);
	ellipseMode(CENTER)

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1400, 600, 20, 120);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 40, 40);

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position, {x:85, y:-85});
	}

}
