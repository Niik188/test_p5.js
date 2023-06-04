class Player{
    constructor(img,position,size,keys){
        this.img = img
        this.keys = keys
        this.position = position
        this.size = size
        this.velocity = {
            x: 0,
            y: 1
        }
        this.speed = 5
        this.flip = false
        this.sprite = "";
    }
    setup(){
        this.img = loadImage(this.img);
    }
    draw(){
        image(this.img, this.position.x, this.position.y, this.size.w, this.size.h, 0, -1, 70, 188)
        if (this.flip) {
            push();
            scale(-1,1);
            image(this.img, this.position.x*-1, this.position.y, this.size.w*-1, this.size.h, 0, -1, 70, 188)
            pop(); 
        }
        
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x*this.speed
    }
}

export var player = new Player('./img/player.png',{x:0,y:10},{w:70,h:188}, ['a','w','s', 'd'])

var keyState = {};    
addEventListener('keydown',function(e){
    keyState[e.key] = true;
},true);    
addEventListener('keyup',function(e){
    keyState[e.key] = false;
    player.velocity.x=0;
},true);

function gameLoop() {
    if (keyState[player.keys[0]] || keyState[player.keys[0].toUpperCase()]){ 
        player.velocity.x=-1;
        player.flip = true
    }

    if (keyState[player.keys[1]] || keyState[player.keys[1].toUpperCase()]){
        // player.velocity.y = -5
    }

    if (keyState[player.keys[3]] || keyState[player.keys[3].toUpperCase()]){
        player.velocity.x=1;
        player.flip = false
    }
    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
}    
gameLoop();