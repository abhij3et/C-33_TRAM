const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;

var gameState = "onSling";
var flag=0;



function preload() {
    bg=loadImage("images/bg.jpg")
    aawaz=loadSound("sound/train.mp3")
    aawaz1=loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(50,320,70,70);
    box2 = new Box(150,320,70,70);
    box3 = new Box(250,320,70,70);
    box4 = new Box(350,320,70,70);
    box5 = new Box(450,320,70,70);

    chain1= new SlingShot(box1.body,box2.body)
    chain2= new SlingShot(box2.body,box3.body)
    chain3= new SlingShot(box3.body,box4.body)
    chain4= new SlingShot(box4.body,box5.body)

    rock=new Pig(920,395)
}

function draw(){
    //if(backgroundImg)
        background(bg);
        textSize(30)
        text("x : "+mouseX+"y :" +mouseY,mouseX,mouseY);

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    chain1.display();
    chain2.display()
    chain3.display()
    chain4.display()
    rock.display();
    collision=Matter.SAT.collides(box5.body, rock.body);
    if(collision.collided)
    {
        flag=1;
    }
    if(flag===1)
    {
        text("CRASH!!!",460,120)
        aawaz1.play();
    }
}
function keyPressed(){
    if(keyCode===RIGHT_ARROW)
    {

        Matter.Body.applyForce(box5.body,{x:box5.body.position.x,y:box5.body.position.y},{x:50,y:0});
        aawaz.play();
    }
}
