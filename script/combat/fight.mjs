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

    drawPattern() {
        for (let i = 0; i < this.n_bullets; i++) {
            if (i % 2 == 1) {
                this.bullets[i].random.ye = true;
                this.bullets[i].shoot('horizontal');
            } else {
                this.bullets[i].random.ye = true;
                this.bullets[i].shoot('vertical');
            }
            this.bullets[i].draw(this.gameFrame);
        }
    }
}