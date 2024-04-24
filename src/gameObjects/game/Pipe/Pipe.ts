import { Sprite } from "pixi.js";
import { Tween } from "tweedle.js";

import { app } from "../../..";

import { textures } from "../../../configs/loader";
import { Utils } from "../../../configs/utils";

import GameObject from "../../../core/gameObject/GameObject";

import { IROPipeProps } from "./types";
import GameEvents from "../../../enums/GameEvents";

export default class Pipe extends GameObject {
    direction: number[];

    readonly isLock: boolean | void;

    private readonly base: Sprite;
    private readonly active: Sprite;

    constructor(props: IROPipeProps) {
        super();

        this.direction = props.direction;
        this.isLock = props.isLock;
        this.angle = props.angle;

        this.base = new Sprite(textures.pipes[props.type].base);
        this.active = new Sprite(textures.pipes[props.type].active);

        this.base.anchor.set(0.5, 0.5);
        this.addChild(this.base);

        this.active.anchor.set(0.5, 0.5);
        this.addChild(this.active);

        if (!this.isLock) {
            this.active.alpha = 0;
        }
    }

    public toggleWater(isActive: boolean): void {
        new Tween(this.active).to({ alpha: Number(isActive) }, 500).start();
    }

    override onInit(): void {
        this.interactive = true;
        this.on("pointerdown", this.onPointerDown, this);
    }

    override onRemove(): void {
        this.interactive = false;
        this.off("pointerdown", this.onPointerDown, this);
    }

    private onPointerDown(): void {
        if (this.isLock !== undefined) {
            return;
        }

        new Tween(this).to({ angle: this.angle - 90 }, 50).start();
        this.direction = Utils.arrayRotate(this.direction, true);

        app.stage.emit(GameEvents.CHECK_COMPARE);
    }
}
