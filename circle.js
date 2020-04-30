class Circle{

    constructor(x,y,radiusX,radiusY){
    
        var options = {
    
        isStatic:true
    
        }
        this.body = Bodies.rectangle(x, y, radiusX,radiusY, options);
        this.radiusX = radiusX
        this.radiusY = radiusY
        
        World.add(world, this.body);
    
    }
    
    
    display(){
        var pos = this.body.position
        strokeWeight(2)
        stroke("black")
        fill ("white")
        
        ellipseMode(RADIUS);

    ellipse(pos.x,pos.y,this.radiusX,this.radiusY)
    
        }
        
    
        
        
        
        }
        
        
        