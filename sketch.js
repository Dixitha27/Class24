const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1;
var pig2;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    box1 = new Box(900,300,50,50);
    box2 = new Box(760,300,50,50);
    pig1 = new Pig(830,300);
    log1 = new Log(830,290,200, PI/2);
    
    pig2 = new Pig(300,200);

    
    bird1 = new Bird(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird1.display();
}