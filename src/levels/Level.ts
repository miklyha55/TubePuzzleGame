import { jsons } from "../configs/loader";
import GameObject from "../core/gameObject/GameObject";

import Bg from "../gameObjects/game/Bg";
import Pipes from "../gameObjects/game/Pipes";

export default class Level extends GameObject {
    private readonly count: number;

    constructor(count: number) {
        super();

        this.count = count;
    }

    override onInit(): void {
        const bg: Bg = new Bg();
        const pipes: Pipes = new Pipes(jsons.game.levels[this.count]);

        this.addChild(bg);
        bg.init();

        this.addChild(pipes);
        pipes.init();
    }
}
