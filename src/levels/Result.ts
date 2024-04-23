
import GameObject from "../core/gameObject/GameObject";

import Bg from "../gameObjects/ui/menu/Bg";

export default class Result extends GameObject {
    constructor() {
        super();
    }

    override onInit(): void {
        const bg: Bg = new Bg();

        this.addChild(bg);
        bg.init();
    }
}
