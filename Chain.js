class Chain{
    constructor(bodyA,bodyB){
        var options={
            //our bodyA is the bird's body
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
        
    }
display(){
    var pointA =this.chain.bodyA.position
    var pointB= this.chain.bodyB.position
line(pointA.x,pointB.y,pointB.x,pointB.y);
}
}