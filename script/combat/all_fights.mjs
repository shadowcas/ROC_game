import {Bullet} from '../objects/bullet.mjs';

// Fight 1
export function init1(enemy) {
    let bullets = [];
    enemy.init();
    for (let i = 0; i < enemy.n_bullets; i++) {
      bullets[i] = new Bullet(i, 4, 'media/bullets/seed.png');
      if (i % 2 == 1) {
        bullets[i].y = Math.floor(Math.random() * gameFrame.height);
      } else {
        bullets[i].x = Math.floor(Math.random() * gameFrame.width);
      }
    }
    enemy.bullets = bullets;
}

// Fight 2
export function init2(enemy) {
  let bullets = [];
  enemy.init();
  for (let i = 0; i < enemy.n_bullets; i++) {
    bullets[i] = new Bullet(i, 4, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  enemy.bullets = bullets;
}

// Fight 3
export function init3(enemy) {
  let bullets = [];
  enemy.init();
  for (let i = 0; i < enemy.n_bullets; i++) {
    bullets[i] = new Bullet(i, 6, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  enemy.bullets = bullets;
}

// Fight 4
export function init4(enemy) {
  let bullets = [];
  enemy.init();
  for (let i = 0; i < enemy.n_bullets; i++) {
    bullets[i] = new Bullet(i, 6, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  enemy.bullets = bullets;
}

// Fight 5
export function init5(enemy) {
  let bullets = [];
  enemy.init();
  for (let i = 0; i < enemy.n_bullets; i++) {
    bullets[i] = new Bullet(i, 8, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  enemy.bullets = bullets;
}

// Fight 6
export function init6(enemy) {
  let bullets = [];
  enemy.init();
  for (let i = 0; i < enemy.n_bullets; i++) {
    bullets[i] = new Bullet(i, 8, 'media/bullets/seed.png');
    if (i % 2 == 1) {
      bullets[i].y = Math.floor(Math.random() * gameFrame.height);
    } else {
      bullets[i].x = Math.floor(Math.random() * gameFrame.width);
    }
  }
  enemy.bullets = bullets;
}