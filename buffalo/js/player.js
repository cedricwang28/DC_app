class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.gravity = 3;
        this.dy = 0;
        this.w = 35;
        this.h = 50;
    }

    render(){
        fill(255);
        rect(this.x,this.y,this.w,this.h);
    }

    jump(){
        if (this.y == height/2 - 50) {
            this.dy = -25;
        }
    }

    move() {
        this.y += this.dy;
        this.dy += this.gravity;
        this.y = constrain(this.y, 0, height/2-50);
      }

    update(){
        this.move();
        //this.render();
    }
}