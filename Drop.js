class Drop{
    constructor(x,y,width,height,angle){
        var options = {
            density : 1,
            isStatic : false,
            friction : 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}