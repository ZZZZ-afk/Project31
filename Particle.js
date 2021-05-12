class Particle{
    constructor(x,y,r){
        var options={
            resitution:0.4,
           
        }

        this.body=Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));

        this.x=x;
        this.y=y;
        this.r=r;

        World.add(world,this.body);
    }

  display(){
      var position=this.body.position;
      var angle=this.body.angle;

      push();
        translate(position.x, position.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
      pop();
  }
}