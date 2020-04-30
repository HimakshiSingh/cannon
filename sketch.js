const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var r ,r1,r2
var ground
var c,c1,c2,c3

function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world ;
    ground = new Ground(200,390,400,20)
    r = new Rectangle(120,370,100,20)
    c = new Circle(120,350,50,50)
    r1 = new Rectangle(120,350,100,20)
    r2 = new Rectangle(160,320,50,20)
    c1 = new Circle(220,300,20,20)
    c2 = new Circle(290,370,20,20)
    c3 = new Circle(300,100,20,20)
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  r2.display();
  c.display();
  r.display();
  r1.display();
  c3.display();
  c1.display();
  
  ground.display();
  c2.display();
  
  drawSprites();
}