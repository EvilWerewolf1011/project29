class Block {
    constructor(x, y, width, height, colour) {
        var options = {
            'restitution' : 0.1
        }

      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, colour, options);
      this.width = width;
      this.height = height;
      this.colour = colour;
      World.add(world, this.body);
    }
    display(){

      console.log(this.body.speed)
      if (this.body.speed < 20) {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.colour)
        strokeWeight(3)
        stroke("black")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }

      else
      {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 2;
        tint(255, this.Visiblity);
        pop();
      }

    }
  };
