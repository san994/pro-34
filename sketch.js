const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld,myEngine;


function preload() {
//preload the images here

backGround = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1500, 700);
 myEngine = Engine.create();
 myWorld = myEngine.world;

  // create sprites here

  ground = new Ground(800,550);

  block1 = new Block(530,200);
  block2 = new Block(530,200);
  block3 = new Block(530,200);
  block4 = new Block(530,200);
  block5 = new Block(530,200);
  block6 = new Block(530,200);
  
  block7 = new Block(750,200);
  block8 = new Block(750,200);
  block9 = new Block(750,200);
  block10 = new Block(750,200);

  block11 = new Block(860,200);
  block12 = new Block(860,200);
  block13 = new Block(860,200);
  block14 = new Block(860,200);
  block15 = new Block(860,200);

  //  block16 = new Block(960,100);
  //  block17 = new Block(960,100);
  //  block18 = new Block(960,100);
  //  block19 = new Block(960,100);
  //  block20 = new Block(960,100);
  //  block21 = new Block(960,100);
  //  block22 = new Block(960,100);
  //  block23 = new Block(960,100);
 
   block16 = new Block(650,50);
   block17 = new Block(650,50);
   block18 = new Block(650,50);
   block19 = new Block(650,50);
   block20 = new Block(650,50);
   block21 = new Block(650,50);
   block22 = new Block(650,50);
   block23 = new Block(650,50);
   block24 = new Block(650,50);
   block25 = new Block(650,50);
 
  
 hero = new Hero(100,500);

 fly = new Fly(hero.body,{x:500,y:50});

 monster = new Monster(1000,300);

}

function draw() {

background("black");
image(backGround,700,350,2000,700)

Engine.update(myEngine);

ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

block7.display();
block8.display();
block9.display();
block10.display();

block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

hero.display();

monster.display();





}


function mouseDragged(){

 Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})



}


  