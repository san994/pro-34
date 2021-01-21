class Monster{

    constructor(x,y){
  
     var options = {
  
       density : 0.04,
       friction : 1,
       isStatic : false,
       restitution : 0.5
  
     }
  
     this.radius = 10;
     this.body = Bodies.circle(x,y,100,options);
     
     this.image = loadImage("Monster-01.png");
     //this.img = loadImage("Monster-02.png");
     
     World.add(myWorld,this.body);
  
    }
  
  display(){
  

  var pos = this.body.position
  
  ellipseMode(RADIUS);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,300,300);

  
  }
  
  }
  