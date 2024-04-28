import { Text } from "pixi.js";

import GameObject from "../../../core/gameObject/GameObject";

export default class Title extends GameObject {
    constructor() {
        super({
            landscape: {
                relativePosition: {
                    x: 0,
                    y: -0.2,
                },
            },
            portrait: {
                relativePosition: {
                    x: 0,
                    y: -0.2,
                },
            }
        });
    }

    override onInit(): void {
        const text: Text = new Text("Game \nover!", { fill: 0x0000ff, fontSize: 55, align: "center" });

        text.anchor.set(0.5, 0.5);
        this.addChild(text);
    }
}
