import { Shape } from './Shape';
import { Circle } from './Circle'; 
import { Rectangle } from './Rectangle'; 

let myShape = new Shape(10, 4);
console.log("Shape info " + myShape.getInfo());

let myCircle = new Circle(5, 4, 20);
console.log("Circle info " + myCircle.getInfo());

let mysRectangle = new Rectangle(0, 0, 3, 7);
console.log(`Rectangle info ${mysRectangle.getInfo()}`);





