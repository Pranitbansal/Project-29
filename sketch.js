const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    canvas=(800,300);

    stand1=new Ground(390,280,240,10);
    stand2=new Ground(550,240,240,10);
    
    Engine.update(engine);
}

function draw(){
    backGround("white");

    stand1.display();
    stand2.display();
}
