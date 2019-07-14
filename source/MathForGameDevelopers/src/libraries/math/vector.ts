export class Vector {
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

    squaredLength(): number {
        return this.getX() * this.getX() + this.getY() * this.getY();
    }

    length(): number {
        return Math.sqrt(this.squaredLength());
    }

    scale(multiplier: number): Vector {
        return new Vector(this.x * multiplier, this.y * multiplier);
    }

    divide(divisor: number): Vector {
        return new Vector(this.x / divisor, this.y / divisor);
    }

    normalize(): Vector {
        return this.divide(this.length());
    }
}