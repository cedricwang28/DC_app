class Obstacle{
    constructor(w,h,speed){
        this.x = width + w*2;
        this.y = height/2 - h;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }

    render(){
        fill(255,0,0);
        rect(this.x,this.y,this.w,this.h);
    }

    move(){
        this.x -= this.speed;
    }

    //returns true if player is within hit box
    hit(target){
        if(target){
            return target.x+target.w > this.x && target.x+target.w < this.x+this.w && target.y+target.h > this.y? true : false;
        }
    }

    update(){
        this.move();
        //this.render();
    }
}