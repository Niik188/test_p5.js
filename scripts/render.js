import { player } from "./Player.js";
import { rooms } from "./ganeration.js";

let canv
let font
function setup() {
    canv = createCanvas(1000, 400, 'pixelated x1.5');
    font = loadFont('./font/Hardpixel.OTF')
    textFont(font)
    player.setup()
    rooms.forEach(room => {
        room.setup()
    });
}

function draw() {
    clear();
    background(0)
    canv.width = window.innerWidth
    canv.height = window.innerHeight
    rooms.forEach(room => {
        room.draw()
    });
    player.update()
    fill(255,255,255)
    textSize(20);
    text("FPS:" + int(getFrameRate()), 30, 30)
}

window.setup = setup
window.draw = draw
window.keyTyped = keyTyped