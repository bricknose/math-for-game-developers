import { Pacman } from "../objects/pacman";
import { Point } from "../libraries/point";

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
    }

    init(): void {
    }

    create(): void {
        // create background
        //this.background = this.add.image(0, 0, "background");
        //this.background.setOrigin(0, 0);
        //this.background.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);

        this.load.image("pacman", "assets/pacman.png");

        this.player = new Pacman(this, new Point(0, 0));
        this.physics.add.existing(this.player);
    }

    update(): void {
    }
}