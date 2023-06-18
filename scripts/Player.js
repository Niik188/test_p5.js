import { collis, collisGround } from "./collision.js";
import { rooms } from "./ganeration.js";

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
        this.sprite = ""
        this.use = false
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
        player.position.y += player.velocity.y
        player.velocity.y += 0.5
        this.position.x += this.velocity.x*this.speed
        this.collision()
    }
    collision(){
        var objects = 
        rooms.forEach(room => {
            if (collisGround(this,room.ground)) {
            if (this.velocity.y > 0) {
                player.velocity.y = 0
                player.position.y = room.ground.y - this.size.h - 0.01
            }
            }
            room.objects.forEach(object => {
                if (collis(this,object)) {
                    if (this.use) {
                        player.use = false
                        console.log("hi")
                        
                    }
                }
            })
        });
        
    }
}

export var player = new Player('./img/player.png',{x:0,y:10},{w:70,h:188}, ['a','w','s', 'd'])

addEventListener('keypress', (e)=>{
    console.log("h")
    if (e.key == 'g') {
        player.use = true
    }
})

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