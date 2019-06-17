import { Pacman } from "../objects/pacman";
import { Controls } from "../libraries/controls/controls";
import { Point } from "../libraries/math/point";
﻿import { Pacman } from "../objects";
import { Controls } from "../libraries/controls";
import { Point } from "../libraries/math";

export class MainGameScene extends Phaser.Scene {
    private player: Pacman;

    constructor() {
        super({
            key: "MainGameScene"
        });
    }

    preload(): void {
        this.load.spritesheet("pacman-sheet", "assets/pacman.png",
            {
                frameWidth: 13,
                frameHeight: 13
            });
    }

    init(): void {
    }

    create(): void {
        let controls = new Controls(this.input.keyboard);

        this.player = new Pacman(this, new Point(20, 20), controls);
        this.add.existing(this.player);
    }

    update(): void {
    }
}