import { Actor } from "./actor";
import { Point } from "../libraries/math/point";
import { Controls } from "../libraries/controls/controls";
import Scene = Phaser.Scene;

export class Pacman extends Actor {
    private controls: Controls;

    constructor(scene: Scene, startPoint: Point, controls: Controls) {
        super(scene, startPoint, "pacman-sheet", 0);

        this.controls = controls;
    }

    preUpdate(time: number, delta: number): void {
        let moveVector = this.controls.getMoveVector();
        this.move(moveVector);

        if (moveVector.getX()) {
            this.flipX = moveVector.getX() < 0;
        }
    }
}