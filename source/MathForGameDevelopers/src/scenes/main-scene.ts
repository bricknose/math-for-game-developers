import { Pacman, Ghost, GhostType } from "../objects";
import { Controls } from "../libraries/controls";
import { Point } from "../libraries/math";

export class MainGameScene extends Phaser.Scene {
    private player: Pacman;
    private ghosts: Ghost[];

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
        this.load.spritesheet("inky-sheet", "assets/inky.png",
            {
                frameWidth: 14,
                frameHeight: 14
            });
        this.load.spritesheet("blinky-sheet", "assets/blinky.png",
            {
                frameWidth: 14,
                frameHeight: 14
            });
        this.load.spritesheet("pinky-sheet", "assets/pinky.png",
            {
                frameWidth: 14,
                frameHeight: 14
            });
        this.load.spritesheet("clyde-sheet", "assets/clyde.png",
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

        this.ghosts = [
            new Ghost(this, new Point(400, 450), GhostType.Inky),
            new Ghost(this, new Point(450, 400), GhostType.Clyde)
        ];

        for (let ghost of this.ghosts) {
            this.add.existing(ghost);
        }
    }

    update(): void {
        const closestGhost = this.findClosestGhost();
        if (closestGhost) {
            closestGhost.chaseTarget(this.player);
        }
    }

    private findClosestGhost() {
        let closestGhost: Ghost = null;

        for (let ghost of this.ghosts) {
            if (closestGhost == null)
                closestGhost = ghost;
            else if (ghost == null)
                continue;
            else {
                const previousClosestGhostDistanceSquared = this.player.getPosition().subtract(closestGhost.getPosition()).findSquaredLength();
                const thisGhostDistanceSquared = this.player.getPosition().subtract(ghost.getPosition()).findSquaredLength();

                if (thisGhostDistanceSquared < previousClosestGhostDistanceSquared) {
                    closestGhost = ghost;
                }
            }
        }

        return closestGhost;
    }
}