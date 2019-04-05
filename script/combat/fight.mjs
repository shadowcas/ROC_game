export class Fight {
    constructor(id, name, n_bullets, time, src) {
        this.level = id;
        this.n_bullets = n_bullets;
        this.time = time;
        this.bullets = [];
        this.over = false;

        this.name = name;
        this.image = src;

        this.gameFrame = document.getElementById('gameFrame');
    }

    init() {
        document.getElementById("name").innerText = this.name;
        document.getElementById("level").innerText = this.level;
        document.getElementById("creature").style.backgroundImage = `url('${this.image}')`;
    }

    drawPattern(level) {
        switch (level) {
            case 1:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('horizontal');
                    } else {
                        this.bullets[i].shoot('horizontal_rev');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
            case 2:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('vertical');
                    } else {
                        this.bullets[i].shoot('vertical_rev');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
            case 3:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('diagonal_r_d');
                    } else {
                        this.bullets[i].shoot('diagonal_l_d');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
            case 4:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('vertical');
                    } else {
                        this.bullets[i].shoot('horizontal_rev');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
            case 5:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('diagonal_l_d');
                    } else {
                        this.bullets[i].shoot('diagonal_r_d');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
            case 6:
                for (let i = 0; i < this.n_bullets; i++) {
                    if (i % 2 == 1) {
                        this.bullets[i].shoot('horizontal_rev');
                    } else {
                        this.bullets[i].shoot('diagonal_l_u');
                    }
                    this.bullets[i].draw(this.gameFrame);
                }
                break;
        }
    }
}