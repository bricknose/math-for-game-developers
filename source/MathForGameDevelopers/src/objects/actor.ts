import Scene = Phaser.Scene;
import { Vector, Point } from "../libraries/math";

export class Actor extends Phaser.GameObjects.Sprite {
    private position: Point;

    constructor(scene: Scene, position: Point, texture: string, frame: string | number) {
        super(
            scene,
            position.getX(),
            position.getY(),
            texture,
            frame);

        this.updatePosition(position);
    }

    move(v: Vector): void {
        this.updatePosition(this.position.add(v));
    }

    getPosition(): Point {
        return this.position;
    }

    private updatePosition(newPosition: Point): void {
        this.position = newPosition;
        this.setPosition(newPosition.getX(), newPosition.getY());
    }
}