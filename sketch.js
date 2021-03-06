const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backImage;
var ground;
var superhero;
var sling;
var monster;
function preload() {
//preload the images here

backImage = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(1500,400,3000,20);
  superhero = new Superhero(500,500,100);
  sling = new Sling(superhero.body,{x:500,y:30});
  b1 = new Block(600,300,70,70);
  b2 = new Block(700,300,70,70);
  b3 = new Block(800,300,70,70);
  b4 = new Block(600,300,70,70);
  b5 = new Block(700,300,70,70);
  b6 = new Block(800,300,70,70);
  b7 = new Block(600,300,70,70);
  b8 = new Block(700,300,70,70);
  b9 = new Block(800,300,70,70);
  b10 = new Block(600,300,70,70);
  b11 = new Block(700,300,70,70);
  b13 = new Block(700,300,70,70);
  b12 = new Block(800,300,70,70);
  monster = new Monster(1200,50,70,70);

}

function draw() {
  background(backImage);
  
  Engine.update(engine);

  ground.display();
  superhero.display();
  sling.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

