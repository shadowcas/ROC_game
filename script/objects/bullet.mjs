export class Bullet {
    constructor(id, speed, looks) {
        this.id = id;
        this.src = looks;
        this.x = 0;
        this.y = 0;
        this.speed = speed;
    }

    draw(gameFrame) {
        const ctx = gameFrame.getContext('2d');
        let bulletRender = new Image();

        bulletRender.src = this.src;
        ctx.drawImage(bulletRender,this.x, this.y);

        if (this.x >= gameFrame.width) {
            this.x = 0;
        }
        if (this.y >= gameFrame.height) {
            this.y = 0;
        }
    }

    shoot(direction) {
        switch (direction) {
            case 'horizontal':
                this.x += this.speed;
                break;
            case 'vertical':
                this.y += this.speed;
                break;
            case 'diagonal':
                this.x += this.speed;
                this.y += this.speed;
                break;
        }
    }
}