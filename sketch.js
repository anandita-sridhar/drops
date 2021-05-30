const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var drops=[]
var maxDrops=100
function preload(){
    thunder1=loadImage("thunderbolt/1.png")
    thunder2=loadImage("thunderbolt/2.png")
    thunder3=loadImage("thunderbolt/3.png")
    thunder4=loadImage("thunderbolt/4.png")
}

function setup(){
   
    var canvas=createCanvas(500,700)
    engine=Engine.create()
    world=engine.world
    umbrella=new Umbrella(200,500)
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrops(random(0,500),random(0,500)))
    }
}

function draw(){
    Engine.update(engine)
    background("black")
    rand=Math.round(random(1,4))
    if(frameCount%60==0){
        thunderCreatedFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1)
            break;
            case 2: thunder.addImage(thunder2)
            break;
            case 3: thunder.addImage(thunder3)
            break;
            case 4: thunder.addImage(thunder4)
            break;
            default:break
        }
        thunder.scale=0.7
    }
    if(thunderCreatedFrame+10==frameCount&&thunder){
        thunder.destroy()
    }
    umbrella.display()
    for(var i=0;i<maxDrops;i++){
        drops[i].display()
        drops[i].update()
    }
    drawSprites()
}
