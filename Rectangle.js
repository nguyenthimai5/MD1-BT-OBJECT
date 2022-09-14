class Rectangle{
 width;
  height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWight(width){
        this.wight=width
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
}