import { IROPipeProps } from "../../gameObjects/game/Pipe/types";

export interface IROGameProps {
    readonly levels: IROLevelsProps[],
}

export interface IROLevelsProps {
    readonly width: number;
    readonly height: number;
    readonly pipes: IROPipeProps[],
    readonly map: Array<IROMapItemProps[]>,
}

export type IROMapItemProps = ['string', number];