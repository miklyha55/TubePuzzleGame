import { Graphics, Text } from "pixi.js";

import { app } from "../../..";

import GameObject from "../../../core/gameObject/GameObject";

import GameEvents from "../../../enums/GameEvents";

export default class Button extends GameObject {
    constructor() {
        super({
            landscape: {
                scale: {
                    x: 0.6,
                    y: 0.6,
                },
                relativePosition: {
                    x: 0,
                    y: 0.2,
                },
            },
            portrait: {
                scale: {
                    x: 0.8,
                    y: 0.8,
                },
                relativePosition: {
                    x: 0,
                    y: 0.2,
                },
            }
        });
    }

    override onInit(): void {
        const graphics: Graphics = new Graphics();

        graphics.beginFill(0xFFFF00);
        graphics.lineStyle(5, 0xFF0000);
        graphics.drawRect(-150, -50, 300, 100);

        this.addChild(graphics);

        const text: Text = new Text("Play", { fontSize: 50 });

        text.anchor.set(0.5, 0.5);
        this.addChild(text);

        this.interactive = true;
        this.on("pointerdown", this.onPointerDown, this);
    }

    override onRemove(): void {
        this.interactive = false;
        this.off("pointerdown", this.onPointerDown, this);
    }

    private onPointerDown(): void {
        app.stage.emit(GameEvents.NEXT_LEVEL);
    }
}
