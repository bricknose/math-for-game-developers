import { Vector } from "./vector";

export class Point {
    private x: number;
    private y: number;

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
}