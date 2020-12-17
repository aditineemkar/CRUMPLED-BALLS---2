
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var BgImag, Bg
var ground;
var box1,box2,box3;
var dustbinImage,cloudImage;
var cloud1,cloud3;
var sun;

function preload(){
  BgImag = loadImage("image/Image.png");
  dustbinImage = loadImage("image/dustbin.png");
  cloudImage = loadImage("image/cloud.png");
  
}

function setup() {
  createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  paper = new Paper(50,566,70,70);

  box1 = new Box(1000,580,200,20);
  box2 = new Box(900,480,20,220);
  box3 = new Box(1100,480,20,220);

  sun = new Sun(920,60,200,140);

  cloud1 = new Cloud(150,80,280,130);
  
  cloud3 = new Cloud(450,80,280,130);

  Engine.run(engine);
  
}


function draw() {
  
  background(BgImag);

  Engine.update(engine);

  imageMode(CENTER);
  image(cloudImage,300,220,280,130);

  imageMode(CENTER);
  image(cloudImage,650,170,280,130);

  ground.display();

  paper.display();

  //box1.display();
  //box2.display();
  //box3.display();

  sun.display();

  cloud1.display();
  //cloud2.display();
  cloud3.display();

  imageMode(CENTER);
  image(dustbinImage,1000,480,200,220);

  

 

}

function keyPressed(){
  
  if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x : 85, y : -85});

  }

}

