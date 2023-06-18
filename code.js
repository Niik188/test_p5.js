let player1;
let player;
let player2;
function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10;
  player = createSprite(50, 50, 40, 40);
  player1 = createSprite(50, 100, 40, 40);
  player2 = loadAnimation('./img/player.png', { frameSize: [70, 188], frames: 10 });
  player.addImage(loadGif('./img/Style_1_male_walking.gif'));
  player1.addImage(loadGif('./img/Style_1_male_walking.gif'))
  player1.collider = 'static'
}

function draw() {
    camera.on();
    camera.x = player.x;
    camera.y = player.y;
    console.log(player.y)
  background(50);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER)
  player1.debug = mouse.pressing();
//   player1.moveTowards(mouse, 0.10);
  if (kb.pressing('left')) {player.vel.x = -2; player.mirror.x = true;}
  else if (kb.pressing('right')) {player.vel.x = 2;player.mirror.x = false;}
  else player.vel.x = 0;

  player.rotation = 360;
}