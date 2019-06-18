import { Vector } from "./";

export class Point {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    add(v: Vector): Point {
        return new Point(
            this.x + v.getX(),
            this.y + v.getY()
        );
    }

    subtract(p: Point): Vector {
        return new Vector(
            this.x - p.getX(),
            this.y - p.getY()
        );
    }
}