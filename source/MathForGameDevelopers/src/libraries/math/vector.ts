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

    findLength(): number {
        return Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY());
    }
}