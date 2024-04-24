import { Sprite } from "pixi.js";

import { textures } from "../../configs/loader";

import GameObject from "../../core/gameObject/GameObject";

export default class Bg extends GameObject {
    constructor() {
        super({
            landscape: {
                scale: {
                    x: 0.9,
                    y: 0.9,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                scale: {
                    x: 0.9,
                    y: 0.9,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });
    }

    override onInit(): void {
        const sprite: Sprite = new Sprite(textures.bgLevel);

        sprite.anchor.set(0.5, 0.5);
        this.addChild(sprite);
    }
}
