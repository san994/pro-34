class Ground{

    constructor(x,y){
  
     var options = {
  
       isStatic : true
    
     }
  
     this.body = Bodies.rectangle(x,y,800,20,options);
     
     World.add(myWorld,this.body);
  
    }
  
  display(){
  
  var pos = this.body.position
  
  push();
  fill("white");
  rectMode(CENTER);
  rect(pos.x,pos.y,600,20);
  pop();
  
  }
  
  }