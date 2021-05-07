var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1365,624);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 130, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9

	groundSprite=createSprite(width/2, height-10, width,30);
	groundSprite.shapeColor="limegreen";

	var ground_options ={
        isStatic: true
   }

   var packageBody_options ={
       isStatic : true
   }

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 130 , 5 ,packageBody_options);
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 ,ground_options );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('skyblue');

 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW || keyDown("SPACE")) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   var packageBody_options ={
       restitution : 0.8,
	   
   }
	packageBody = Bodies.circle(width/2 , 130 , 5 , packageBody_options);
	World.add(world, packageBody);
    
  }
}



