import { ObservablePoint } from "pixi.js"

export interface IROOrientationProps {
    readonly scale?: {
        readonly x: number;
        readonly y: number;
    },

    readonly relativePosition?:{
        readonly x: number;
        readonly y: number;
    },

    readonly absolutePosition?:{
        readonly x: number;
        readonly y: number;
    },
}

export interface IROGameObjectProps {
    readonly landscape: IROOrientationProps,
    readonly portrait: IROOrientationProps,
}

export interface IROResizeProps {
    readonly width: number,
    readonly height: number,
    readonly deviceRatio: number,
}

export interface IVec2 extends ObservablePoint {
    x: number,
    y: number,
}