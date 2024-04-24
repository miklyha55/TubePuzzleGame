import { app, onResize } from "../..";

import { LevelIndexes } from "../constants";
import GameEvents from "../../enums/GameEvents";

import GameObject from "../../core/gameObject/GameObject";
import { Container, DisplayObject } from "pixi.js";

type Levels = (GameObject | null)[];

export default class BaseScene extends GameObject {
    private readonly levels: Levels | void;
    private currentLevelIndex: number;

    constructor(levels: Levels | void) {
        super();

        this.levels = levels;
        this.currentLevelIndex = 0;
    }

    override onInit(): void {
        this.onSetLevel(LevelIndexes.Menu);
        this.sceneInit();

        app.stage.on(GameEvents.SET_LEVEL, this.onSetLevel, this);
        app.stage.on(GameEvents.NEXT_LEVEL, this.onNextLevel, this);
    }

    protected sceneInit(): void {}

    override onRemove(): void {
        this.sceneRemove();

        app.stage.off(GameEvents.SET_LEVEL, this.onSetLevel, this);
        app.stage.off(GameEvents.NEXT_LEVEL, this.onNextLevel, this);
    }

    protected sceneRemove(): void {}

    private onSetLevel(index: number): void {
        this.currentLevelIndex = index;
        const level: GameObject | null | void = this.levels ? this.levels[index] : null;

        if (level == null) {
            return;
        }

        if (this.children.length) {
            this.children.forEach((children: DisplayObject) => {
                children instanceof Container && children.removeChildren();
            });
        }

        this.addChild(level);
        level.init();

        onResize();
    }

    private onNextLevel(): void {
        this.currentLevelIndex++;
        this.onSetLevel(this.currentLevelIndex);
    }
}
