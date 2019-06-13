import { Pacman } from "../objects/pacman";
import { Controls } from "../libraries/controls/controls";
import { Point } from "../libraries/math/point";

export class MainGameScene extends Phaser.Scene {
    private background: Phaser.GameObjects.Image;
    private player: Pacman;

    constructor() {
        super({
            key: "MainGameScene"
        });
    }

    preload(): void {
        this.load.image(
            "background",
            "assets/background.png"
        );
        this.load.spritesheet("pacman-sheet", "assets/pacman.png",
            {
                frameWidth: 13,
                frameHeight: 13
            });
    }

    init(): void {
    }

    create(): void {
        // create background
        //this.background = this.add.image(0, 0, "background");
        //this.background.setOrigin(0, 0);
        //this.background.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);

        //this.physics.add.sprite(50, 50, "pacman-sheet", 0);

        let controls = new Controls(this.input.keyboard);

        this.player = new Pacman(this, new Point(20, 20), controls);
        //this.physics.add.existing(this.player);
        this.add.existing(this.player);
    }

    update(): void {
    }
}