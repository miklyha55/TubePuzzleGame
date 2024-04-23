import { Text } from "pixi.js";

import GameObject from "../../../core/gameObject/GameObject";

export default class Title extends GameObject {
    constructor() {
        super({
            landscape: {
                absolutePosition: {
                    x: 0,
                    y: -100,
                },
                scale: {
                    x: 1,
                    y: 1,
                }
            },
            portrait: {
                absolutePosition: {
                    x: 0,
                    y: -200,
                },
                scale: {
                    x: 0.8,
                    y: 0.8,
                }
            }
        });
    }

    override onInit(): void {
        const text: Text = new Text("КРУТАЯ ИГРА С ТРУБАМИ!");

        text.anchor.set(0.5, 0.5);
        this.addChild(text);
    }
}
