import { Vector } from "./";

export class Point {
    constructor(private readonly _x: number, private readonly _y: number) {
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    add(v: Vector): Point {
        return new Point(
            this.x + v.x,
            this.y + v.y
        );
    }

    subtract(p: Point): Vector {
        return new Vector(
            this.x - p.x,
            this.y - p.y
        );
    }
}