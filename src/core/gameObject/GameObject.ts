import { Container } from "pixi.js";

import { app } from "../..";

import GameEvents from "../../enums/GameEvents";

import { type IROGameObjectProps, type IROOrientationProps, type IROResizeProps } from "./types";

export default class GameObject extends Container {
    props: IROGameObjectProps | void;

    constructor(props: IROGameObjectProps | void) {
        super();

        this.props = props;
    }

    public init(): void {
        this.onInit();

        app.stage.on(GameEvents.RESIZE, this.onResize, this);
        this.once("removed", this.onRemove, this);
    }

    protected onInit(): void {}
    protected onRemove(): void {}

    protected onResize(props: IROResizeProps): void {
        if (!this.props) {
            return;
        }

        const { deviceRatio, } = props;
        const { landscape, portrait } = this.props;
        const { innerWidth, innerHeight } = window;
        const isLandscape: boolean = innerWidth / innerHeight > 1;

        const resizeProps: IROOrientationProps = isLandscape
            ? landscape
            : portrait;


        if (resizeProps.scale) {
            this.scale.x = resizeProps.scale.x * deviceRatio;
            this.scale.y = resizeProps.scale.y * deviceRatio;
        }

        if (resizeProps.relativePosition) {
            this.x =
                (innerWidth * resizeProps.relativePosition.x);
            this.y =
                (innerHeight * resizeProps.relativePosition.y);
        }

        if (resizeProps.absolutePosition) {
            this.x = resizeProps.absolutePosition.x;
            this.y = resizeProps.absolutePosition.y;
        }
    }
}
