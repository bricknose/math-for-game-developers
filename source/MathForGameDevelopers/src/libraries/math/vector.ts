export class Vector {
    constructor(private readonly _x: number, private readonly _y: number) {
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    squaredLength(): number {
        return this.x * this.x + this.y * this.y;
    }

    length(): number {
        return Math.sqrt(this.squaredLength());
    }

    scale(multiplier: number): Vector {
        return new Vector(this.x * multiplier, this.y * multiplier);
    }

    add(v: Vector): Vector {
        return new Vector(
            this.x + v.x,
            this.y + v.y
        );
    }

    subtract(p: Vector): Vector {
        return new Vector(
            this.x - p.x,
            this.y - p.y
        );
    }

    divide(divisor: number): Vector {
        return new Vector(this.x / divisor, this.y / divisor);
    }

    normalize(): Vector {
        return this.divide(this.length());
    }
}