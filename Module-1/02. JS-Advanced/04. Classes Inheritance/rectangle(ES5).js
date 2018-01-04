const Shape = function(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
};
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
};
Shape.prototype.print = function() {
    console.log(`The figure has x: ${this.x} and y: ${this.y}.`);
};

const Rectangle = function(id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const Circle = function(id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

(() => {
    const rect = new Rectangle(1, 1, 2, 10, 10);
    rect.print();
})();
