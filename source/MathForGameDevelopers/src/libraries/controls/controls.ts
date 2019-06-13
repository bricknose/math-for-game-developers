import { Vector } from "../../libraries/math/vector";

export class Controls {
    private upKey: Phaser.Input.Keyboard.Key;
    private downKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private rightKey: Phaser.Input.Keyboard.Key;

    constructor(keyboardInput: Phaser.Input.Keyboard.KeyboardPlugin) {
        this.upKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.downKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.leftKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    getMoveVector(): Vector {
        const leftRight = (this.rightKey.isDown ? 1 : 0) + (this.leftKey.isDown ? -1 : 0);
        const upDown = (this.downKey.isDown ? 1 : 0) + (this.upKey.isDown ? -1 : 0);

        return new Vector(leftRight, upDown);
    }
}