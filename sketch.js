const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22;
var ground1,ground2,ground3;
var polygon,slingshot;

function preload(){
    polygon = loadImage("polygon.png")
}

function setup() {
	createCanvas(1500, 600);

    engine = Engine.create();
	world = engine.world;

    //creating grounds
    ground1 = new Ground(600,285,200,10);
    ground2 = new Ground(900,195,200,10);
    ground3 = new Ground(750, 600, 1500,10);

    //creating layer1 part1
    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);

    //creating layer2 part1
    block6 = new Block(585,220,30,40);
    block7 = new Block(555,220,30,40);
    block8 = new Block(615,220,30,40);
    block9 = new Block(645,220,30,40);

    //creating layer3 part1
    block10 = new Block(600,170,30,40);
    block11 = new Block(570,180,30,40);
    block12 = new Block(630,180,30,40);

    //creating layer4 part1
    block13 = new Block(600,140,30,40); 

    //creating layer1 part2
    block14 = new Block(900,170,30,40);
    block15 = new Block(930,170,30,40);
    block16 = new Block(870,170,30,40);
    block17 = new Block(840,170,30,40);
    block18 = new Block(960,170,30,40);

    //creating layer2 part2
    block19 = new Block(900,140,30,40);
    block20 = new Block(930,140,30,40);
    block21 = new Block(870,140,30,40);

    //creating layer3 part2
    block22 = new Block(900,110,30,40);

    //creating player
    polygon1 = new Polygon(100,100,30,30);

    //creating slingshot
    slingshot = new SlingShot(polygon1.body,{x:200, y:200});
    

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background("grey");
  
    polygon1.display();

    ground1.display();
    ground2.display();
    ground3.display();

    fill("pink")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    fill("lightblue")
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill("green")
    block10.display();
    block11.display();
    block12.display();

    fill("yellow")
    block13.display();

    fill("orange")
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    fill("blue")
    block19.display();
    block20.display();
    block21.display();

    fill("red")
    block22.display();

    slingshot.display();

}

 //creating dragged function
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX, y:mouseY});
}

//creating mouse released function
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(polygon1.body,{x:200,y:200});
        slingshot.attach(polygon1.body);
    }

}