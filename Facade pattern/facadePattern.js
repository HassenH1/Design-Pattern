//The facade pattern hides complex code with easier to use higher level code example jQuery, AJAX

class Shape {
  draw() {}
}

class Rectangle extends Shape {
  //override parent method
  draw() {
    super.draw();
    console.log("Rectangle::draw()");
  }
}

class Square extends Shape {
  draw() {
    super.draw();
    console.log("Square::draw()");
  }
}

class Circle extends Shape {
  draw() {
    super.draw();
    console.log("Circle::draw()");
  }
}

class ShapeMaker {
  constructor() {
    this.circle = new Circle();
    this.rectangle = new Rectangle();
    this.square = new Square();
  }

  drawCircle() {
    this.circle.draw();
  }

  drawRectangle() {
    this.rectangle.draw();
  }

  drawSquare() {
    this.square.draw();
  }
}

class FacadePatternDemo {
  main() {
    let shapeMaker = new ShapeMaker();

    shapeMaker.drawCircle();
    shapeMaker.drawRectangle();
    shapeMaker.drawSquare();
  }
}

let FPD = new FacadePatternDemo();
FPD.main();

/***Output
Circle::draw()
Rectangle::draw()
Square::draw()
***/
