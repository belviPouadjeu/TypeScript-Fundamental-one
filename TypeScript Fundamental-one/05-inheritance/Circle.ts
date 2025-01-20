// Importing the Shape class from the './Shape' module
import { Shape } from './Shape';

/**
 * Represents a Circle, extending the Shape class.
 * Includes additional properties and methods specific to circles.
 */
export class Circle extends Shape {

    
    constructor(x: number, y: number, private _radius: number) {
        // Call the parent class constructor to initialize X and Y coordinates
        super(x, y);
    }

    /**
     * Getter for the radius property.
     * @returns The radius of the circle.
     */
    public get radius(): number {
        return this._radius;
    }

    /**
     * Setter for the radius property.
     * Allows updating the radius of the circle.
     * @param value - The new radius value.
     */
    public set radius(value: number) {
        this._radius = value;
    }

    /**
     * Provides information about the circle.
     * Combines parent class info with the radius.
     * @returns A string with X, Y, and radius information.
     */
    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}
