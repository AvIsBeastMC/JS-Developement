const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    border1 = new BaseClass(100, 1000, 400, 500);
}

function draw(){
    background("green");
    Engine.update(engine);
    border1.display();
    
}