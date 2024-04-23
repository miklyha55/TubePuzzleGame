import { app, onResize } from "../..";

import { LevelIndexes } from "../constants";
import GameEvents from "../../enums/GameEvents";

import GameObject from "../../core/gameObject/GameObject";


type Levels = (GameObject | null)[];

export default class BaseScene extends GameObject {
    private readonly levels: Levels | void;

    constructor(levels: Levels | void) {
        super();

        this.levels = levels;
    }

    override onInit(): void {
        this.onSetLevel(LevelIndexes.Menu);
        this.sceneInit();

        app.stage.on(GameEvents.SET_LEVEL, this.onSetLevel, this);
    }

    protected sceneInit(): void { }

    override onRemove(): void {
        this.sceneRemove();

        app.stage.off(GameEvents.SET_LEVEL, this.onSetLevel, this);
    }

    protected sceneRemove(): void { }

    private onSetLevel(index: number): void {
        const level: GameObject | null | void = this.levels ? this.levels[index] : null;

        if (level == null) {
            return;
        }

        if (this.children.length) {
            this.children.forEach(children => {
                (children as GameObject).remove();
            });
        }

        this.addChild(level);
        level.init();

        onResize();
    }
}
