import Scene = Phaser.Scene;
import { Vector } from "../libraries/vector";
import { Point } from "../libraries/point";

export class Actor extends Phaser.GameObjects.Sprite {
    private position: Point;

    constructor(scene: Scene, position: Point, texture: string, frame: string | number) {
        super(
            scene,
            position.getX(),
            position.getY(),
            texture,
            frame);

        this.position = position;
    }

    move(v: Vector): void {
        this.updatePosition(this.position.add(v));
    }

    private updatePosition(newPosition: Point): void {
        this.position = newPosition;
        this.x = newPosition.getX();
        this.y = newPosition.getY();
    }
}