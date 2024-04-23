import BaseScene from "./core/BaseScene";

import Menu from "../levels/Menu";
import Level1 from "../levels/Level1";
import Result from "../levels/Result";

export default class GameScene extends BaseScene {
    constructor() {
        super([
            new Menu(),
            new Level1(),
            new Result(),
        ]);
    }
}
