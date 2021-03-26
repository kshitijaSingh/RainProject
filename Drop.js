class Drop{
    constructor(x,y){
        var options={
            friction :0.1,
            restitution : 0.1,

        }
        this.rain = Bodies.cirle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain);

    }
    updateY() {
        if(this.rain.position.y>heigth){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }
    showDrop(){
        fill("ligthblue");
        ellipseMode(CENTRE);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}