import { Vector } from "../../libraries/math";

export class Controls {
    private readonly upKey: Phaser.Input.Keyboard.Key;
    private readonly downKey: Phaser.Input.Keyboard.Key;
    private readonly leftKey: Phaser.Input.Keyboard.Key;
    private readonly rightKey: Phaser.Input.Keyboard.Key;

    private moveVector: Vector = new Vector(1, 0);

    constructor(keyboardInput: Phaser.Input.Keyboard.KeyboardPlugin) {
        this.upKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.downKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.leftKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = keyboardInput.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.bindKeyEvents(this.upKey, new Vector(0, -1));
        this.bindKeyEvents(this.downKey, new Vector(0, 1));
        this.bindKeyEvents(this.leftKey, new Vector(-1, 0));
        this.bindKeyEvents(this.rightKey, new Vector(1, 0));
    }

    getMoveVector(): Vector {
        return this.moveVector;
    }

    private bindKeyEvents(key: Phaser.Input.Keyboard.Key, keyVector: Vector)
    {
        key.on('down', () => this.setMoveVector(keyVector));
    }

    private setMoveVector(moveVector: Vector){
        this.moveVector = moveVector;
    }
}