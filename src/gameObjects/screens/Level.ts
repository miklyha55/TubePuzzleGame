import GameObject from "../../core/gameObject/GameObject";

export default class Level extends GameObject {
    constructor() {
        super({
            landscape: {
                scale: {
                    x: 1,
                    y: 1,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                scale: {
                    x: 1,
                    y: 1,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });
    }
}
