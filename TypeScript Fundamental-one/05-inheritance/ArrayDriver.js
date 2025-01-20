"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 4);
let myCircle = new Circle_1.Circle(5, 4, 20);
let mysRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes ... initially empty
let theShape = [];
// add the shapes to the array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(mysRectangle);
for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
}
