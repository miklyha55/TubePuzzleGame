import { Application } from "pixi.js";
import "@pixi/math-extras";

import Game from "./app/Game";
import GameEvents from "./enums/GameEvents";

import "./css/main.css";

const width = 800;
const height = 800;

export const app: Application = new Application({
    resizeTo: window,
    backgroundColor: 0x222222,
    antialias: true,
    autoDensity: true,
    resolution: 2,
});

export const onResize = () => {
    app.stage.emit(GameEvents.RESIZE, {
        width,
        height,
        deviceRatio: Math.max(innerWidth / width, innerHeight / height),
    });
}

(async () => {
    window.onresize = onResize;

    const game: Game = new Game();

    app.stage.addChild(game);
    await game.init();

    onResize();
})()
