export class Bullet {
    constructor(id, speed, looks) {
        this.id = id;
        this.speed = speed;
        this.src = looks;
        this.x = 0;
        this.y = 0;

        this.random = {ye:false, max:this.speed}
    }

    draw(gameFrame) {
        const ctx = gameFrame.getContext('2d');
        let bulletRender = new Image();

        bulletRender.src = this.src;
        ctx.drawImage(bulletRender, this.x, this.y);

        if (this.x > gameFrame.width) {
            this.x = 0;
            this.y = Math.floor(Math.random() * gameFrame.height)
        } else if (this.x <= 0) {
            this.x = gameFrame.width;
            this.y = Math.floor(Math.random() * gameFrame.height)
        }
        if (this.y > gameFrame.height) {
            this.y = 0;
            this.x = Math.floor(Math.random() * gameFrame.width)
        } else if (this.y < 0) {
            this.y = gameFrame.height;
            this.x = Math.floor(Math.random() * gameFrame.width)
        }
    }

    shoot(direction) {
        switch (direction) {
            // horizontal both directions
            case 'horizontal':
                this.x += this.speed;
                break;
            case 'horizontal_rev':
                this.x -= this.speed;
                break;
            // vertical both directions
            case 'vertical':
                this.y += this.speed;
                break;
            case 'vertical_rev':
                this.y -= this.speed;
                break;
            // diagonal right down
            case 'diagonal_r_d':
                this.x += this.speed;
                this.y += this.speed;
                break;
            // diagonal right up
            case 'diagonal_r_u':
                this.x += this.speed;
                this.y -= this.speed;
                break;
            // diagonal left down
            case 'diagonal_l_d':
                this.x -= this.speed;
                this.y += this.speed;
                break;
            // diagonal left up
            case 'diagonal_l_u':
                this.x -= this.speed;
                this.y -= this.speed;
                break;
        }
    }
}