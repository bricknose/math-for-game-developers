import { Actor, GhostType } from "./";
import { Vector, Point } from "../libraries/math";
import Scene = Phaser.Scene;

export class Ghost extends Actor {

    constructor(scene: Scene, startPoint: Point, ghostType: GhostType) {
        const getGhostType = () => {
            switch (ghostType) {
                case GhostType.Inky:
                    return "inky-sheet";
                case GhostType.Blinky:
                    return "blinky-sheet";
                case GhostType.Pinky:
                    return "pinky-sheet";
                case GhostType.Clyde:
                    return "clyde-sheet";
            }
        };

        super(scene, startPoint, getGhostType(), 0);
    }

    preUpdate(time: number, delta: number): void {
    }

    chaseTarget(target: Actor) {
        const targetVector = target.getPosition().subtract(this.getPosition());

        console.log(`Distance to target: ${targetVector.findLength()}`);

        const maxMoveAmount = .5;

        const moveVector = new Vector(
            Math.max(Math.min(targetVector.getX(), maxMoveAmount), -maxMoveAmount),
            Math.max(Math.min(targetVector.getY(), maxMoveAmount), -maxMoveAmount)
        );

        this.move(moveVector);

        if (moveVector.getX()) {
            this.flipX = moveVector.getX() < 0;
        }
    }
}