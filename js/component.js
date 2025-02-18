class Component {
    constructor( x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;

        // create and load the image
        const img = new Image ();
        img.addEventListener('load', () => {
            this.img = img;
            // we draw the image using the method that we created
            // the 'this' refers to the class, not the image

        });
        // src of the image
        img.src = '/images/car.png';
    };

    drawCar() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        console.log(this.x)
        //this.ctx.fillRect(this.x, this.y, this.w, this.h);
    };

    drawObstacle () {
        //this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    left () {
        this.x -= 10;
    };

    right () {
        this.x += 10;
    };
}