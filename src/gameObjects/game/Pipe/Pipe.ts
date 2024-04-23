import { Sprite } from "pixi.js";

import { textures } from "../../../configs/loader";

import GameObject from "../../../core/gameObject/GameObject";

import { IROPipeProps } from "./types";

export default class Pipe extends GameObject {
    private readonly pipeProps: IROPipeProps;

    private base: Sprite;
    private active: Sprite;

    constructor(props: IROPipeProps) {
        super();

        this.pipeProps = props;

        this.base = new Sprite(textures.pipes[this.pipeProps.type].base);
        this.active = new Sprite(textures.pipes[this.pipeProps.type].active);

        this.base.anchor.set(0.5, 0.5);
        this.addChild(this.base);

        this.active.anchor.set(0.5, 0.5);
        this.addChild(this.active);
    }

    override onInit(): void {}
}
