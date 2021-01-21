class Block{

    constructor(x,y){
  
     var options = {
  
       density : 0.04,
       friction : 1,
       isStatic : false,
       restitution : 0
  
     }
  
     this.body = Bodies.rectangle(x,y,60,60,options);
     
     World.add(myWorld,this.body);
  
    }
  
  display(){
  
  var pos = this.body.position
  var angle = this.body.angle
  
  push();
  translate(pos.x,pos.y)
  rotate(angle)
  rectMode(CENTER);
  fill("red");
  stroke("black")
  rect(0,0,60,60);
  pop();
  
  }
  
  }