
import GameObject from "../core/gameObject/GameObject";

import Bg from "../gameObjects/ui/Bg";

export default class Menu extends GameObject {
    constructor() {
        super();
    }

    override onInit(): void {
        const bg: Bg = new Bg();

        this.addChild(bg);
        bg.init();
    }
}
