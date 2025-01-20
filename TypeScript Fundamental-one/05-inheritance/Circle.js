"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
// Importing the Shape class from the './Shape' module
const Shape_1 = require("./Shape");
/**
 * Represents a Circle, extending the Shape class.
 * Includes additional properties and methods specific to circles.
 */
class Circle extends Shape_1.Shape {
    constructor(x, y, _radius) {
        // Call the parent class constructor to initialize X and Y coordinates
        super(x, y);
        this._radius = _radius;
    }
    /**
     * Getter for the radius property.
     * @returns The radius of the circle.
     */
    get radius() {
        return this._radius;
    }
    /**
     * Setter for the radius property.
     * Allows updating the radius of the circle.
     * @param value - The new radius value.
     */
    set radius(value) {
        this._radius = value;
    }
    /**
     * Provides information about the circle.
     * Combines parent class info with the radius.
     * @returns A string with X, Y, and radius information.
     */
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
