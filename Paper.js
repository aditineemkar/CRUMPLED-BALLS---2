class Paper{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 0.3

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("image/paper.png");
     

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

        if(this.body.position.x > 950 && this.body.position.y > 400){
            Matter.Body.setStatic(this.body,true);
        }
    }

}