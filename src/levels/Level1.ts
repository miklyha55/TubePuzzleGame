import GameObject from "../core/gameObject/GameObject";

import Bg from "../gameObjects/game/Bg";

export default class Level1 extends GameObject {
    constructor() {
        super();
    }

    override onInit(): void {
        const bg: Bg = new Bg();

        this.addChild(bg);
        bg.init();
    }
}
