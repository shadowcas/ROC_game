export class Player {
    constructor(speed, startHP, looks) {
        this.speed = speed * 5;
        this.health = startHP;
        this.src = looks;

        let insert = "_hit";

        let new_looks = looks.split('');
        new_looks.splice(looks.length-4, 0, insert);
        this.hitSrc = new_looks.join('');

        this.x = 0;
        this.y = 0;

        this.W = false,
        this.A = false,
        this.S = false,
        this.D = false;

        this.hit = false;
        this.grace = false;
        this.invFrames = 0;
    }

    draw(gameFrame) {
        const ctx = gameFrame.getContext('2d');
        let render = new Image(25, 25);

        if (this.hit == true) {
            render.src = this.hitSrc;
        } else {
            render.src = this.src;
        }

        ctx.drawImage(render, this.x, this.y);
    }

    HPhandler(handle = null) {
        if (handle == "hit") {
            document.getElementById(`L${this.health}`).src = this.hitSrc;
            this.health--;
            this.hit = true;

            if (this.health == 0) {
                alert("game over");
                window.location.href = "index.html";
            }
        }

        if (this.hit == true) {
            this.invFrames++;
            if (this.invFrames == 120) {
                this.hit = false;
                this.invFrames = 0;
            }
        }
    }

    move(k, kc, gameFrame) {
        if (k == "keydown") {
            switch (kc) {
                case 68: //d
                    this.D = true;
                    break;
                case 83: //s
                    this.S = true;
                    break;
                case 65: //a
                    this.A = true;
                    break;
                case 87: //w
                    this.W = true;
                    break;
            }
        }
        if (k == "keyup") {
            switch (kc) {
                case 68: //d
                    this.D = false;
                    break;
                case 83: //s
                    this.S = false;
                    break;
                case 65: //a
                    this.A = false;
                    break;
                case 87: //w
                    this.W = false;
                    break;
            }
        }
    }

    calc() {
        if (this.D && (this.x + 27) <= gameFrame.width) {this.x += this.speed}
        if (this.S && (this.y + 30) <= gameFrame.height) {this.y += this.speed}
        if (this.A && (this.x - 10) >= 0) {this.x -= this.speed}
        if (this.W && (this.y - 10) >= 0) {this.y -= this.speed}
    }    
}