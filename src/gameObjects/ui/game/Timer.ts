import { Text } from "pixi.js";
import { Tween } from "tweedle.js";

import GameObject from "../../../core/gameObject/GameObject";

export default class Timer extends GameObject {
    private minutes: number;
    private seconds: number;
    private tween: Tween<{}> | null;

    private readonly callback: () => void;
    private readonly bar: Text;

    constructor(seconds: number, callback: () => void) {
        super({
            landscape: {
                scale: {
                    x: 0.6,
                    y: 0.6,
                },
                relativePosition: {
                    x: -0.35,
                    y: 0,
                },
            },
            portrait: {
                scale: {
                    x: 0.7,
                    y: 0.7,
                },
                relativePosition: {
                    x: 0,
                    y: -0.35,
                },
            }
        });

        this.minutes = 0;
        this.seconds = seconds;
        this.tween = new Tween({});
        this.callback = callback;
        this.bar = new Text("", { fill: 0xffffff, fontSize: 50 });
        this.bar.anchor.set(0.5, 0.5);

        this.addChild(this.bar);
    }

    override onInit(): void {
        this.update();
    }

    override onRemove(): void {
        this.tween?.rewind();
        this.tween = null;
    }

    private update(): void {
        this.tween?.to({}, 1000).onRepeat(() => {
            this.seconds--;
            this.minutes = Math.floor(this.seconds / 60);

            if (this.seconds === 0) {
                this.callback();
                return;
            }

            this.bar.text = `Timer: ${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds % 60)}`;
        }).repeat().skip(1).start();
    }

    private formatNumber(number: number): string {
        if (number < 10) {
            return "0" + number
        }

        return String(number);
    }
}
