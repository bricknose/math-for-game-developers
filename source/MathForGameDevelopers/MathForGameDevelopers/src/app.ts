import "phaser";
import { MainGameScene } from "./scenes/main-scene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    title: "Math For Game Developers",
    parent: "game",
    scene: [new MainGameScene()],
    input: {
        keyboard: true
    },
    backgroundColor: "#3A99D9",
    render: { pixelArt: false, antialias: false }
};

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    var game = new Game(config);
});