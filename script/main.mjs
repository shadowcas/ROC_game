// Run nodejs with npm i -g http-server && http-server

import {Bullet} from "./objects/bullet.mjs";
import {Player} from "./objects/player.mjs";
import {Fight} from "./combat/fight.mjs";
import * as all_fights from "./combat/all_fights.mjs";

const gameFrame = document.getElementById('gameFrame'),
      ctx = gameFrame.getContext('2d');

let player = new Player(1, 3, 'media/player/heart.png'),
    counter = 0,
    current_level = 1,
    initialized = false;

player.x = gameFrame.width / 2;
player.y = gameFrame.height / 2;

window.addEventListener("keydown", function(e) {player.move(e.type, e.keyCode, gameFrame);});
window.addEventListener("keyup", function(e) {player.move(e.type, e.keyCode, gameFrame);});

// ----------
// Game loop
// ----------
let bullets = [];
let enemies = {
  1: new Fight(1, "walnut", 8, 300, "media/play/zone1_creatures/1.png"),
  2: new Fight(2, "Floof", 12, 300, "media/play/zone1_creatures/2.png"),
  3: new Fight(3, "Umons", 16, 300, "media/play/zone1_creatures/3.png"),
  4: new Fight(4, "paddo",  20, 300, "media/play/zone1_creatures/4.png"),
  5: new Fight(5, "Hopkins", 24, 300, "media/play/zone1_creatures/5.png"),
  6: new Fight(6, "Clawdius",  28, 300, "media/play/zone1_creatures/boss.png")
};

function update(elapsed) {
  if (!initialized) {
    player.W = false; player.A = false; player.S = false; player.D;
    
    eval(`all_fights.init${enemies[current_level].level}(enemies[current_level])`);
    initialized = true;
    console.log("initialized");
  }

  player.calc();

  let hit = enemies[current_level].bullets.filter(bullet => bullet.x > player.x - 15 && bullet.x < player.x + 25 && bullet.y > player.y - 15 && bullet.y < player.y + 25);

  if (hit.length > 0 && player.hit == false) {
    player.HPhandler("hit");
  }

  player.HPhandler();
}

function render() {
  ctx.clearRect(0, 0, gameFrame.width, gameFrame.height);
  player.draw(gameFrame);

  enemies[current_level].drawPattern();

  counter++;
  if (counter >= enemies[current_level].time) {
    alert("level up!");
    current_level++;
    counter = 0;
    initialized = false;

    player.health = 3;
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
};

window.requestAnimationFrame(tick);