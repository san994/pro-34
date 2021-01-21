class Fly{

    constructor(bodyA,pointB){
  
     var options = {
  
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.5,
        length : 500
  
     }
  
     this.pointB = pointB
     this.fly = Constraint.create(options);
     
    
     World.add(myWorld,this.fly);
  
    }
  
  display(){
  
  var pos = this.fly.bodyA.position
  
  push();
  strokeWeight(0);
  line(this.pointB.x,this.pointB.y,pos.x,pos.y);
  pop();
  
  }
  
  }