import { Actor } from "./";
import { Vector, Point } from "../libraries/math";
import Scene = Phaser.Scene;

export class Ghost extends Actor {
    private target: Actor;

    constructor(scene: Scene, startPoint: Point, target: Actor) {
        super(scene, startPoint, "ghost-sheet", 0);

        this.target = target;
    }

    preUpdate(time: number, delta: number): void {
        let targetVector = this.target.getPosition().subtract(this.getPosition());
        console.log(`Distance to target: ${targetVector.findLength()}`);

        const maxMoveAmount = .5;

        let moveVector = new Vector(
            Math.max(Math.min(targetVector.getX(), maxMoveAmount), -maxMoveAmount),
            Math.max(Math.min(targetVector.getY(), maxMoveAmount), -maxMoveAmount)
        );

        this.move(moveVector);

        if (moveVector.getX()) {
            this.flipX = moveVector.getX() < 0;
        }
    }
}