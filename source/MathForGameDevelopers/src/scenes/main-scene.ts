import { Pacman, Ghost } from "../objects";
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
        this.load.spritesheet("ghost-sheet", "assets/inky.png",
            {
                frameWidth: 14,
                frameHeight: 14
            });
    }

    init(): void {
    }

    create(): void {
        const controls = new Controls(this.input.keyboard);

        this.player = new Pacman(this, new Point(20, 20), controls);
        this.add.existing(this.player);

        const ghost = new Ghost(this, new Point(400, 400), this.player);
        this.add.existing(ghost);
    }

    update(): void {
    }
}