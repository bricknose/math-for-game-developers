import { Actor, GhostType } from "./";
import { Vector, Point } from "../libraries/math";
import Scene = Phaser.Scene;

export class Ghost extends Actor {

    private static readonly MoveSpeed = 100;

    private currentTarget : Actor;

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
        if (this.currentTarget) {
            this.chaseCurrentTarget(delta);
        }
    }

    chaseTarget(target: Actor) {
        this.currentTarget = target;
    }

    chasingTarget(target?: Actor) {
        return target != undefined 
        ? this.currentTarget == target
        : this.currentTarget != null;
    }

    private chaseCurrentTarget(delta: number) {
        const targetVector = this.currentTarget.getPosition().subtract(this.getPosition());

        const moveVector = targetVector.normalize();

        this.move(moveVector.scale(Ghost.MoveSpeed * delta / 1000));

        if (moveVector.x) {
            this.flipX = moveVector.x < 0;
        }
    }
}