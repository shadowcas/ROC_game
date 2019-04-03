// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";
import {Player} from "./objects/player.mjs";

const gameFrame = document.getElementById('gameFrame'),
      ctx = gameFrame.getContext('2d');

let player = new Player(1, 3, 'media/player/heart.png');
player.x = gameFrame.width / 2;
player.y = gameFrame.height / 2;


window.addEventListener("keydown", function(e) {
  player.move(e.type, e.keyCode, gameFrame); 
});

window.addEventListener("keyup", function(e) {
  player.move(e.type, e.keyCode, gameFrame);
});
// ----------
// Game loop
// ----------
let bullets = [];

fight1_init();

function fight1_init() {
  for (let i = 1; i < 11; i++) {
    bullets[i] = new Bullet(i, 5, 'media/bullets/seed.png');
    if (i % 2 == 0) {
      bullets[i].y = i * gameFrame.width / 10;
    } else {
      bullets[i].x = i * gameFrame.height / 10;
    }
  }
}

function update(elapsed) {
  player.calc();

  console.log(player.x)

  console.log(bullets.filter(bullet => bullet.x == player.x && bullet.y == player.y));

  if (bullets.some(bullet => bullet.x > player.x - 15) &&
      bullets.some(bullet => bullet.x < player.x + 15) &&
      bullets.some(bullet => bullet.y > player.y - 15) &&
      bullets.some(bullet => bullet.y < player.y + 15)) {
    // console.log('hit');
  }

  // let foundX = bullets.some(bullet => bullet.x == player.x);
  // let foundY = bullets.some(bullet => bullet.y == player.y);
  // console.log(found);

  // if (bullets.some(e => e.x > player.x - 15).length > 0 &&
  //     bullets.some(e => e.x < player.x + 15).length > 0 &&
  //     bullets.some(e => e.y > player.y - 15).length > 0 &&
  //     bullets.some(e => e.x < player.y + 15).length > 0) {
  //   console.log('hit');
  // } else {
  //   console.log('nope');
  // }

  // if( seedX > tickX - 15 &&
  //     seedX < tickX + 15 &&
  //     seedY > tickY - 15 &&
  //     seedX < tickY + 15 &&
  //     grace == false) {
  //   console.log('hit');
  //   grace = true;wa
  // }
}

function render() {
  ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);
  player.draw(gameFrame);

  for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
      bullets[i].shoot('horizontal');
    } else {
      bullets[i].shoot('vertical');
    }
    bullets[i].draw(gameFrame);
  }

}

let lastUpdate;

function tick() {
  window.requestAnimationFrame(tick);
  let now = window.Date.now();

  if (lastUpdate) {
    let elapsed = (now-lastUpdate) / 1000;
    lastUpdate = now;

    // Update all game objects here.
    update(elapsed);
    // ...and render them somehow.
    render();
  } else {
    // Skip first frame, so elapsed is not 0.
    lastUpdate = now;
  }

  // This makes the `tick` function run 60 frames per second (or slower, depends on monitor's refresh rate).
};

window.requestAnimationFrame(tick);