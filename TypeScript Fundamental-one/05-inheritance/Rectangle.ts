import { Shape } from './Shape';


export class Rectangle extends Shape {

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length() {
        return this._length;
    }
    public set length(value) {
        this._length = value;
    }


    constructor(x: number, y: number, private _width: number, private _length: number) {
        // Call the parent class constructor to initialize X and Y coordinates
        super(x, y);
    }

    getInfo(): string {
        return super.getInfo() + `,width = ${this._width}, length = ${this._length}`;
    }
}