class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50
        this.image=loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
        World.add(world,this.body)
    }
    
    display(){
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y+70,300,300)
    }
}