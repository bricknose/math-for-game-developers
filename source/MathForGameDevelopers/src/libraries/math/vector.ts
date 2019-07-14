﻿export class Vector {
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

    findSquaredLength(): number {
        return this.getX() * this.getX() + this.getY() * this.getY();
    }

    findLength(): number {
        return Math.sqrt(this.findSquaredLength());
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