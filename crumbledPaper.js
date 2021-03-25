class crumbledPaper {

    constructor(x, y, r) {

      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:0.5
      }
     this.x=x;
     this.y=y;
     this.r=r
     this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body);
    }

    display(){
      
      var crumbledPaperpos =this.body.position;
     
      push()
      translate(crumbledPaperpos.x, crumbledPaperpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill(255,0,255);
      ellipse(0,0,this.r,this.r);
      pop()
    }
   };
  