import { app } from "../..";

import GameObject from "../../core/gameObject/GameObject";

import GameEvents from "../../enums/GameEvents";

import { LevelIndexes } from "../../scenes/constants";

import Timer from "../ui/game/Timer";

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

    override onInit(): void {
        const timer: Timer = new Timer(80, () => {
            app.stage.emit(GameEvents.SET_LEVEL, LevelIndexes.Result);
        });

        this.addChild(timer);
        timer.init();
    }
}
