//Array to hold player characters
let players = [];
//Array to hold buffalo
let buffalo = [];
//Array to hold obstacles
let obstacles = [];
//Current Score
let score = 0;
//Background1 x position
let bgX1 = 0;
//Scroll Speed for background
let scrollSpeed = 2;
//X position for background 2
let bgX2;

//image variables
let buffaloIMG,backgroundIMG,boxIMG,runnerIMG,boxBreakIMG;

//preload images
function preload(){
    backgroundIMG = loadImage('./img/background_placeholder.png');
    boxIMG = loadImage('./img/barrel_placeholder.png');
    boxBreakIMG = loadImage('./img/barrel_placeholder.gif')
    buffaloIMG = loadImage('./img/buffalo_placeholder.gif');
    runnerIMG = loadImage('./img/runner_placeholder.gif');
}

//create game space and add characters
function setup(){
    createCanvas(displayWidth, window.innerHeight);
    players.push(new Player(120,height/2-50));
    buffalo.push(new Buffalo(0,height/2-25));
    //move the second background to the right edge of the screen
    bgX2 = width;
}

//on touch jump, or restart if lost
function touchStarted(){
    if(players[0]){
        for(player of players){
            player.jump();
        }
    }else{
        //reset score and add new player
        score = 0;
        players.push(new Player(120,height/2-50));
    }
}

function draw(){
    //draw background base
    background(0);
    // draw two background images
    image(backgroundIMG, bgX1, 0, width, height);
    image(backgroundIMG, bgX2, 0, width, height);
    //draw black rectangle over bottom half of the screen
    stroke(0);
    fill(0);
    rect(0,height/2,width, height/2);

    //move the background images
    bgX1 -= scrollSpeed;
    bgX2 -= scrollSpeed;

    //if background images go past the screen, reset them back to the right most edge
    if (bgX1 < -width){
        bgX1 = width;
    }
    if (bgX2 < -width){
        bgX2 = width;
    }
  

    //set text stroke
    stroke(255);
    //draw line across middle of the screen
    line(0,height/2,width,height/2);    
    //use for random sizes
    //frameCount % 100 == 0? obstacles.push(new Obstacle(random(10,30), random(20,50), random(5,10))) : false;
    //every 100 frames add a new obstacle with a random speed
    frameCount % 100 == 0? obstacles.push(new Obstacle(30, 30, random(5,10))) : false; 
    
    //draw/update player 
    for(player of players){
        image(runnerIMG, player.x-10,player.y-15);
        player.update();
    }   
    //draw/update buffalo
    for(buff of buffalo){
        image(buffaloIMG, buff.x-10,buff.y-57);
        buff.update();
    } 
    //draw/update obstacles and check for collisions  
    for(let i = 1; i<obstacles.length; i++){
        obstacles[i].x <= width/3-20 ? image(boxBreakIMG,obstacles[i].x,obstacles[i].y-20) : image(boxIMG,obstacles[i].x,obstacles[i].y-20);
        obstacles[i].hit(players[0])? players.pop(): false;
        obstacles[i].x+obstacles[i].w < 0? obstacles.splice(i,1) : obstacles[i].update();
    }

    //draw game info text
    fill(255);  
    players.length>=1? score++ : text("Game Over", width/2, height*0.75);   
    textAlign(CENTER);
    textSize(30);
    text(score, width/2, height*0.66); 
    
    //if playing it says tap to jump, if lost it says tap to restart
    players[0] ? text('Tap to Jump', width/2, height*0.8) : text('Tap to Restart', width/2, height*0.8)




    document.querySelector(".close_icon").addEventListener("click",function(){
        
        window.location.replace("../index.html");
    
    },true);
}