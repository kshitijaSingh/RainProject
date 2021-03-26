class Umbrella{
    constructor(x,y){
        var option={
            isStatic : true,
            
        }
        this.boy = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.boy);

    }
    }