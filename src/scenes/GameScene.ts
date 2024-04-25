import BaseScene from "./core/BaseScene";

import Menu from "../levels/Menu";
import Level from "../levels/Level";
import Result from "../levels/Result";

export default class GameScene extends BaseScene {
    constructor() {
        super([
            new Menu(),
            new Level(0),
            new Level(1),
            new Result(),
        ]);
    }
}
