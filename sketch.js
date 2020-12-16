const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;
var ground;
var tile1, tile2;
var slingShot

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,490,1100,20);
  tile1 = new Holder(400,300,250,10);
  tile2 = new Holder(722,240,200,10);

 block1 = new Block(310,275,30,40);
 block2 = new Block(340,275,30,40);
 block3 = new Block(370,275,30,40);
 block4 = new Block(400,275,30,40);
 block5 = new Block(430,275,30,40);

 block6 = new Block(460,275,30,40);
 block7 = new Block(490,275,30,40);
 block8 = new Block(340,235,30,40);
 block9 = new Block(370,235,30,40);
 block10 = new Block(400,235,30,40);

 block11 = new Block(430,235,30,40);
 block12 = new Block(460,235,30,40);
 block13 = new Block(370,195,30,40);
 block14 = new Block(400,195,30,40);
 block15 = new Block(430,195,30,40);

 block16 = new Block(400,155,30,40);
 block17 = new Block(660,195,30,40);
 block18 = new Block(690,195,30,40);
 block19 = new Block(720,195,30,40);
 block20 = new Block(750,195,30,40);

 block21 = new Block(780,195,30,40);
 block22 = new Block(690,155,30,40);
 block23 = new Block(720,155,30,40);
 block24 = new Block(750,155,30,40);
 block25 = new Block(720,95,30,40);

 polygon= new Ball(50, 200, 20);
 slingShot = new SlingShot(polygon.body, {x : 100,y : 200});


}
function draw() {
background("#382C2C"); 
ground.display();
tile1.display();
tile2.display();

fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

fill("turquoise");
block13.display();
block14.display();
block15.display();

fill("grey");
block16.display();

fill("skyblue");
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

fill("turquoise");
block22.display();
block23.display();
block24.display();

  fill("pink")
block25.display();
polygon.display();
slingShot.display();

textSize(20);
  fill("gold");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);

  fill("orange");
  textSize(25)
  text("Press pace to get a second chance",275,60);

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX ,y :mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:50, y:200}) 
    slingShot.attach(polygon.body);
	}
  }
  