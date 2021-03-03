const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

var backGroundImg;

function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backGroundImg);
    Engine.update(engine);
}