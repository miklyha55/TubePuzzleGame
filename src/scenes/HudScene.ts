import BaseScene from "./core/BaseScene";

import Menu from "../gameObjects/screens/Menu";
import Game from "../gameObjects/screens/Game";
import Result from "../gameObjects/screens/Result";

export default class HudScene extends BaseScene {
    constructor() {
        super([
            new Menu(),
            new Game(),
            new Result(),
        ]);
    }
}
