export class MainGameScene extends Phaser.Scene {
    private background: Phaser.GameObjects.Image;

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
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);
    }

    update(): void {
    }
}