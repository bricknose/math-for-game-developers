import { Actor } from "./actor";
import { Point } from "../libraries/point";
import Scene = Phaser.Scene;

export class Pacman extends Actor {
    constructor(scene: Scene, startPoint: Point) {
        super(scene, startPoint, "pacman", 0);
    }
}