export class Bullet {
    constructor(id, speed, looks) {
        this.id = id;
        this.speed = speed;
        this.src = looks;
        this.x = 0;
        this.y = 0;

        this.random = {ye:false, max:10}
    }

    draw(gameFrame) {
        const ctx = gameFrame.getContext('2d');
        let bulletRender = new Image();

        bulletRender.src = this.src;
        ctx.drawImage(bulletRender,this.x, this.y);

        if (this.x >= gameFrame.width) {this.x = 0; this.y = Math.floor(Math.random() * gameFrame.height)}
        if (this.y >= gameFrame.height) {this.y = 0; this.x = Math.floor(Math.random() * gameFrame.width)}
    }

    shoot(direction) {
        switch (direction) {
            case 'horizontal':
                this.x += this.random.ye == true ? Math.floor(Math.random() * this.random.max) : this.speed;
                break;
            case 'vertical':
                this.y += this.random.ye == true ? Math.floor(Math.random() * this.random.max) : this.speed;
                break;
            case 'diagonal':
                this.x += this.random.ye == true ? Math.floor(Math.random() * this.random.max) : this.speed;
                this.y += this.random.ye == true ? Math.floor(Math.random() * this.random.max) : this.speed;
                break;
            case 'sine':
                this.y += this.speed * Math.sin(this.x);
                this.x += this.speed;
                break;
        }
    }
}