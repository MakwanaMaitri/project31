const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop, boy, thunder;

function preload() {
    boy = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png" ,"images/Walking Frame/walking_4.png", 
    "images/Walking Frame/walking_5.png" ,"images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_7.png" ,"images/Walking Frame/walking_8.png");

    thunder = loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png",
    "images/thunderbolt/3.png", "images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    //image(boy,200,200,90,90);
    boy = createSprite(670,200,40,40);
    boy.addAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png" ,"images/Walking Frame/walking_4.png", 
    "images/Walking Frame/walking_5.png" ,"images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_7.png" ,"images/Walking Frame/walking_8.png");
    boy.scale = 0.6;

    thunder = createSprite(600,100,30,30);
    thunder.addAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png",
    "images/thunderbolt/3.png", "images/thunderbolt/4.png");
    thunder.scale = 0.3;

    drop = new Drop(200,200,10,10);
    drop1 = new Drop(100,100,10,10);
    drop2 = new Drop(250,300,10,10);
    drop3 = new Drop(280,400,10,10);
    drop4 = new Drop(680,150,10,10);
    drop5 = new Drop(180,180,10,10);
    drop6 = new Drop(290,333,10,10);
    drop7 = new Drop(890,222,10,10);
    drop8 = new Drop(20,11,10,10);
    drop9 = new Drop(210,111,10,10);
    drop10 = new Drop(200,390,10,10);
    drop11 = new Drop(500,90,10,10);
    drop12 = new Drop(800,330,10,10);
    drop13 = new Drop(900,320,10,10);
    drop14 = new Drop(130,210,10,10);
    drop15 = new Drop(540,240,10,10);
    drop16 = new Drop(222,399,10,10);
    drop17 = new Drop(290,20,10,10);
    drop18 = new Drop(580,110,10,10);
    drop19 = new Drop(400,123,10,10);
    drop20 = new Drop(750,321,10,10);
    
  
}

function draw(){
     background(0);
     Engine.update(engine);

     
     
     drop.display();
     drop1.display();
     drop2.display();
     drop3.display();
     drop4.display();
     drop5.display();
     drop6.display();
     drop7.display();
     drop8.display();
     drop9.display();
     drop10.display();
     drop11.display();
     drop12.display();
     drop13.display();
     drop14.display();
     drop15.display();
     drop16.display();
     drop17.display();
     drop18.display();
     drop19.display();
     drop20.display();

    drawSprites();
}
function MatterBodysetPosition(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}
