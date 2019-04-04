export class Fight {
    constructor(id, n_bullets, time) {
        this.level = id;
        this.n_bullets = n_bullets;
        this.time = time;
        this.bullets = [];

        this.gameFrame = document.getElementById('gameFrame');
    }

    pattern() {
        for (let i = 0; i < this.n_bullets; i++) {
            this.bullets[i] = new Bullet(i, 6, 'media/bullets/seed.png');
            if (i % 3 == 1) {
                this.bullets[i].y = i * this.gameFrame.width / this.n_bullets;
                this.bullets[i].x = i * this.gameFrame.width / this.n_bullets;
            } else if (i % 3 == 2) {
                this.bullets[i].y = i * this.gameFrame.width / this.n_bullets;
            } else {
                this.bullets[i].x = i * this.gameFrame.height / this.n_bullets;
            }
        }
    }

    drawPattern() {
        for (let i = 0; i < this.n_bullets; i++) {
            if (i % 2 == 1) {
                this.bullets[i].random.ye = true;
                this.bullets[i].shoot('diagonal');
            } else {
                this.bullets[i].random.ye = true;
                this.bullets[i].shoot('vertical');
            }
            this.bullets[i].draw(this.gameFrame);
        }
    }
}