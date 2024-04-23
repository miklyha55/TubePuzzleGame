import GameObject from "../../core/gameObject/GameObject";

import { Utils } from "../../configs/utils";

import Pipe from "./Pipe/Pipe";

import { IROLevelsProps, IROMapItemProps } from "../../scenes/types";
import { IVec2 } from "../../core/gameObject/types";
import { IROPipeProps } from "./Pipe/types";

export default class Pipes extends GameObject {
    private readonly levelProps: IROLevelsProps;

    constructor(levelProps: IROLevelsProps) {
        super({
            landscape: {
                scale: {
                    x: 0.6,
                    y: 0.6,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                scale: {
                    x: 0.6,
                    y: 0.6,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });

        this.levelProps = levelProps;
    }

    override onInit(): void {
        const offset: IVec2 = Utils.v2(
            (this.levelProps.map[0].length * this.levelProps.width) / 2,
            (this.levelProps.map.length * this.levelProps.height) / 2
        );

        this.levelProps.map.forEach((row: IROMapItemProps[], rowIndex: number) => {
            row.forEach((column: IROMapItemProps, colndex: number) => {
                const pipe: Pipe = new Pipe({
                    type: column[0],
                    direction: (this.levelProps.pipes.find((pipe: IROPipeProps) => pipe.type === column[0]))?.direction || [0, 0, 0, 0]
                });

                this.addChild(pipe);
                pipe.init();

                pipe.angle = column[1];

                pipe.x = colndex * this.levelProps.width - offset.x + this.levelProps.width / 2;
                pipe.y = rowIndex * this.levelProps.height - offset.y + this.levelProps.height / 2;
            });
        });
    }
}
