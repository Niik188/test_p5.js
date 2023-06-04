import { player } from "./Player.js";
import { room } from "./ganeration.js";
import { physics } from "./physics.js";

let canv
function setup() {
    canv = createCanvas(1200, 800, 'pixelated x2');
    player.setup()
    room.setup()
}
  
function draw() {
    clear();
    background(0)
    canv.width = window.innerWidth
    canv.height = window.innerHeight
    physics();
    room.draw()
    player.update()
}

window.setup = setup
window.draw = draw