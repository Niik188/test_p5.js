import { player1 } from "./Player.js";

function setup() {
    createCanvas(800, 800);
    player1.setup()
}
  
function draw() {
    clear();
    player1.update()
}

window.setup = setup
window.draw = draw