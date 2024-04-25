import { Container } from "pixi.js";
import * as TWEEDLE from "tweedle.js";

import { app } from "..";

import LoadingScene from "../scenes/LoadingScene";
import GameScene from "../scenes/GameScene";
import HudScene from "../scenes/HudScene";

export default class Game extends Container {
    loadScene: LoadingScene;
    gameScene: GameScene;
    hudScene: HudScene;

    constructor() {
        super();

        this.loadScene = new LoadingScene();
        this.gameScene = new GameScene();
        this.hudScene = new HudScene();

        app.ticker.add(() => {
            TWEEDLE.Group.shared.update(app.ticker.deltaMS);
        });
    }

    public async init(): Promise<void> {
        this.addChild(this.loadScene);

        await this.loadScene.init();

        this.removeChild(this.loadScene);
        this.loadScene.destroy();

        this.addChild(this.gameScene);
        this.addChild(this.hudScene);

        this.gameScene.init();
        this.hudScene.init();
    }
}
