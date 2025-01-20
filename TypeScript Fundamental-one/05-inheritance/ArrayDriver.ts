import { Shape } from './Shape';
import { Circle } from './Circle'; 
import { Rectangle } from './Rectangle'; 

let myShape = new Shape(10, 4);
let myCircle = new Circle(5, 4, 20);
let mysRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let theShape: Shape[] = [];

// add the shapes to the array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(mysRectangle);

for (let tempShape of theShape){
    console.log(tempShape.getInfo());
    
}
