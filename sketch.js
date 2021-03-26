const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops, thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops = [];
var rand ;
var maxDrops = 100; 

var thunderCreatedFrame = 0 ;
var Boy,BoyImg;

function preload(){
thunder1 = loadImage("images/thunderbolt/1.png");
thunder2 = loadImage("images/thunderbolt/2.png");
thunder3 = loadImage("images/thunderbolt/3.png");
thunder4 = loadImage("images/thunderbolt/4.png");
BoyImg = loadImage("images/Walking Frame/walking_4.png");

}

function setup(){
   createCanvas(400,1200);
   engine = Engine.create();
   world = engine.world;
   if(frameCount%150===0){
      for(var i = 0; i<maxDrops;i++){
         drops.push(new Drop(random(0,400),random(0,400)));
      }
   }
   Boy = createSprite(new boy(random(0,400),300));
   Boy.addImage(BoyImg);
}

function draw(){
    Engine.update(engine);
    background(0);
    Boy.display();
    rand= Math.round(random(1,4));
    if(frameCount%80===0){
       thunderCreateFrames = frameCount;
       thunder = createSprite(random(10,370),random(10,30),10,10);
       switch(rand){
          case 1 : thunder.addImage(thunder1);
          break;
          case 2 : thunder.addImage(thunder2);
          break;
          case 3 : thunder.addImage(thunder3);
          break;
          case 4 : thunder.addImage(thunder4);
          default: break;
       }
       thunder.scale = random(0.3,0.6)
    }
      
}

