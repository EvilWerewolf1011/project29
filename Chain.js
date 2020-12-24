class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){

        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();

            strokeWeight(5);
            stroke("white")
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            pop();
        }
    }
    
}
