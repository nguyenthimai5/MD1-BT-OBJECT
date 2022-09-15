class Rectangle{
 width;
  height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWight(width){
        this.width=width
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height=height;
    }
    getHeight(){
        return this.height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    drawRectangle(ctx){
        ctx.beginPath()
        ctx.fillStyle='pink'
        ctx.strokeRect(100,100,this.width,this.height)
        ctx.fill()
        ctx.closePath()
        ctx.fillRect(100,100,this.width,this.height)
    }
}