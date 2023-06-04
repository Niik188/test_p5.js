class Player{
    constructor(x,y,keys){
        this.img = ""
        this.keys = keys
        this.velocityX = 0
        this.speed = 2
        this.flip = false
        this.x = x
        this.y = y
        this.sprite = "";
    }
    setup(){
        this.img = loadImage('./img/player.png');
    }
    draw(){
        image(this.img, this.x, this.y, 70, 188, 0, 0, 70, 188)
        if (player1.flip) {
            push();
            scale(-1,1);
            image(this.img, this.x*-1, this.y, 70*-1, 188, 0, 0, 70, 188)
            pop(); 
        }
        
    }
    update(){
        this.draw()
        this.x += this.velocityX*this.speed
    }
}

export var player1 = new Player(0,10, ['a','w','s', 'd'])

var keyState = {};    
addEventListener('keydown',function(e){
    keyState[e.key] = true;
},true);    
addEventListener('keyup',function(e){
    keyState[e.key] = false;
    player1.velocityX=0;
},true);

function gameLoop() {
    if (keyState[player1.keys[0]] || keyState[player1.keys[0].toUpperCase()]){ 
        player1.velocityX=-1;
        player1.flip = true
    }

    if (keyState["w"] || keyState["W"] || keyState["ц"] || keyState["Ц"]){

    }

    if (keyState[player1.keys[3]] || keyState[player1.keys[3].toUpperCase()]){
        player1.velocityX=1;
        player1.flip = false
    }
    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
}    
gameLoop();