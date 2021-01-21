class Hero{

    constructor(x,y){
  
     var options = {
  
       density : 0.04,
       friction : 1,
       isStatic : false,
       restitution : 1
  
     }
  
     this.body = Bodies.rectangle(x,y,100,100,options);

     this.image = loadImage("Superhero-01.png")
     
     World.add(myWorld,this.body);
  
    }
  
  display(){
  
  var pos = this.body.position
  
  imageMode(CENTER)
  image(this.image,pos.x,pos.y,250,250)
  
  }
  
  }