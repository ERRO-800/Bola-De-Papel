class Ground {
    constructor(x,y,width,height) {
        
        this.height=height
        this.width=width
        
        var options={isStatic:true}
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
     
        
    }
    
    display(){
        rect(this.body.position.x, this.body.position.y,this.width,this.height);

    }
  }