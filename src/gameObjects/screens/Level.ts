import GameObject from "../../core/gameObject/GameObject";

export default class Level extends GameObject {
    constructor() {
        super({
            landscape: {
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });
    }
}
