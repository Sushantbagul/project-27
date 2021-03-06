class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.radius=radius;
        this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
        this.image=loadImage("paper.png")
		World.add(world, this.body);
	}
	display(){
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.radius, this.radius);
			pop()
	}
}