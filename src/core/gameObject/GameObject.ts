import { Container } from "pixi.js";

import { app } from "../..";

import GameEvents from "../../enums/GameEvents";

import { IROGameObjectProps, IROOrientationProps, IROResizeProps } from "./types";

export default class GameObject extends Container {
    props: IROGameObjectProps | void;

    constructor(props: IROGameObjectProps | void) {
        super();

        this.props = props;
    }

    public init() {
        this.onInit();

        app.stage.on(GameEvents.RESIZE, this.onResize, this);
    }

    protected onInit(): void {}

    public remove() {
        this.destroy();
        this.onRemove();

        app.stage.off(GameEvents.RESIZE, this.onResize, this);
    }

    protected onRemove(): void {}

    protected onResize(props: IROResizeProps) {
        if (!this.props) {
            return;
        }

        const { innerWidth, innerHeight } = window;
        const isLandscape: boolean = innerWidth / innerHeight > 1;

        const resizeProps: IROOrientationProps = isLandscape
            ? this.props.landscape
            : this.props.portrait;


        if (resizeProps.scale) {
            this.scale.x = resizeProps.scale.x * props.deviceRatio;
            this.scale.y = resizeProps.scale.y * props.deviceRatio;
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
