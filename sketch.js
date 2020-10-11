var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftWall, bottomWall, rightWall;
var leftWBody, bottomWBody, rightWBody;

var boxPosX, boxPosY;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");


	boxPosX = packageSprite.x;
	boxPosY = groundSprite.y-10;
	engine = Engine.create();
	world = engine.world;

	bottomWall =createSprite(boxPosX, boxPosY, 150,10);
	bottomWall.shapeColor=color("red");

	leftWall =createSprite(boxPosX-75, boxPosY-35, 10,70);
	leftWall.shapeColor=color("red");

	rightWall =createSprite(boxPosX+75, boxPosY-35, 10,70);
	rightWall.shapeColor=color("red");

	leftWBody = Bodies.rectangle(boxPosX-75-15, boxPosY-35, 10,70)
	World.add(world, leftWBody);

	rightWBody = Bodies.rectangle(boxPosX+75-15, boxPosY-35, 10,70)
	World.add(world, rightWBody);

	bottomWBody = Bodies.rectangle(boxPosX, boxPosY-30, 150,10)
	World.add(world, bottomWBody);

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



