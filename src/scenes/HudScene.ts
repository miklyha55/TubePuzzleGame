import BaseScene from "./core/BaseScene";

import Menu from "../gameObjects/screens/Menu";
import Level from "../gameObjects/screens/Level";
import Result from "../gameObjects/screens/Result";

export default class HudScene extends BaseScene {
    constructor() {
        super([
            new Menu(),
            new Level(),
            new Result(),
        ]);
    }
}
