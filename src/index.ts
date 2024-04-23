import { Application } from "pixi.js";
import "@pixi/math-extras";

import Game from "./app/Game";

import "./css/main.css";

const app: Application = new Application({
    resizeTo: window,
    backgroundColor: 0x222222,
    antialias: true,
    autoDensity: true,
    resolution: 2,
});

const game: Game = new Game();

app.stage.addChild(game);
game.init();

export default app;
