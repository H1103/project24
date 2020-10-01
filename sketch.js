const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;

function preload(){
   
}

function setup() {
	createCanvas(1350, 420);
 
   
	engine = Engine.create();
	world = engine.world;

	paper = new Ball(100, 200, 10);

	ground = new Ground(400, 380, 1900, 20);
 
	side0 = new Dustbin(850, 320, 20, 100);
	side1 = new Dustbin(935, 360, 150, 20);
	side2 = new Dustbin(1020, 320, 20, 100);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(0);

 Engine.update(engine);

 paper.display();

 ground.display();

 side0.display();
 side1.display();
 side2.display();

 drawSprites();

}

function keyPressed(){
   if(keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:18.5, y: -18.5})
   }

 }