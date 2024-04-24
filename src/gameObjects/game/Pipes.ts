import { app } from "../..";

import GameObject from "../../core/gameObject/GameObject";

import GameEvents from "../../enums/GameEvents";

import { Utils } from "../../configs/utils";

import Pipe from "./Pipe";

import { IROLevelsProps, IROMapItemProps } from "../../scenes/types";
import { IVec2 } from "../../core/gameObject/types";

export default class Pipes extends GameObject {
    private readonly levelProps: IROLevelsProps;
    private readonly mapPipes: Array<Pipe | null>[];
    private readonly allPipes: Array<Pipe>;

    constructor(levelProps: IROLevelsProps) {
        super({
            landscape: {
                scale: {
                    x: 0.4,
                    y: 0.4,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                scale: {
                    x: 0.4,
                    y: 0.4,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });

        this.levelProps = levelProps;
        this.mapPipes = [];
        this.allPipes = [];
    }

    override onInit(): void {
        this.levelProps.map.forEach((row: Array<IROMapItemProps | null>, rowIndex: number) => {
            const columnArray: Array<Pipe | null> = [];

            row.forEach((column: IROMapItemProps | null, colIndex: number) => {
                let pipe: Pipe | null = null;

                if (column) {
                    const type: string = column[0];
                    const angle: number = column[1];
                    const isLock: boolean | void = column[2];
                    const rotateLength: number = angle / 90;

                    let direction: number[] = this.levelProps.pipes[type].direction;

                    for (let index = 0; index < rotateLength; index++) {
                        direction = Utils.arrayRotate(direction, false);
                    }

                    pipe = new Pipe({
                        type,
                        direction,
                        angle,
                        isLock,
                    });

                    this.addChild(pipe);
                    pipe.init();

                    const offset: IVec2 = Utils.v2(
                        (this.levelProps.map[0].length * pipe.width) / 2,
                        (this.levelProps.map.length * pipe.height) / 2
                    );

                    pipe.x = colIndex * pipe.width - offset.x + pipe.width / 2;
                    pipe.y = rowIndex * pipe.height - offset.y + pipe.height / 2;

                    this.allPipes.push(pipe)
                }

                columnArray.push(pipe);
            });

            this.mapPipes.push(columnArray);
        });

        app.stage.on(GameEvents.CHECK_COMPARE, this.onCheckCompare, this);
    }

    override onRemove(): void {
        app.stage.off(GameEvents.CHECK_COMPARE, this.onCheckCompare, this);

        this.allPipes.forEach((pipe: Pipe) => {
            pipe.destroy();
        });
    }

    private async onCheckCompare(): Promise<void> {
        let pipeCompareCounter: number = 0;

        this.mapPipes.forEach((row: Array<Pipe | null>, rowIndex: number) => {
            row.forEach((column: Pipe | null, colIndex: number) => {
                if (!column) {
                    return;
                }

                let compareCounter: number = 0;

                const upPipe: Pipe | null | void = this.mapPipes[rowIndex - 1] && this.mapPipes[rowIndex - 1][colIndex];
                const downPipe: Pipe | null | void = this.mapPipes[rowIndex + 1] && this.mapPipes[rowIndex + 1][colIndex];
                const leftPipe: Pipe | null | void = this.mapPipes[rowIndex][colIndex - 1];
                const rightPipe: Pipe | null | void = this.mapPipes[rowIndex][colIndex + 1];

                if (upPipe != null && column.direction[1] && upPipe.direction[3]) {
                    compareCounter++;
                }

                if (downPipe != null && column.direction[3] && downPipe.direction[1]) {
                    compareCounter++;
                }

                if (leftPipe != null && column.direction[2] && leftPipe.direction[0]) {
                    compareCounter++;
                }

                if (rightPipe != null && column.direction[0] && rightPipe.direction[2]) {
                    compareCounter++;
                }

                pipeCompareCounter +=
                    !column.isLock && compareCounter === column.direction.filter((number: number) => number).length ? 1 : 0;
            });
        });

        const activePipes: Pipe[] = this.allPipes.filter((pipe: Pipe) => !pipe.isLock);
        const isComplete: boolean = pipeCompareCounter === activePipes.length - 1;

        activePipes.forEach((pipe: Pipe) => {
            pipe.toggleWater(isComplete);
        });

        if (isComplete) {
            this.toggleInterractivePipes(false);

            await Utils.delay(1000);

            app.stage.emit(GameEvents.NEXT_LEVEL);
            this.toggleInterractivePipes(true);
        }
    }

    private toggleInterractivePipes(isActive: boolean): void {
        this.allPipes.forEach((pipe: Pipe) => {
            pipe.interactive = isActive;
        });
    }
}
