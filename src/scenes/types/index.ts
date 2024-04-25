import { type IROPipeProps } from "../../gameObjects/game/Pipe/types";

export interface IROGameProps {
    readonly levels: IROLevelsProps[],
}

export interface IROLevelsProps {
    readonly pipes: { [key: string]: IROPipeProps };
    readonly map: Array<IROMapItemProps[]>,
}

export type IROMapItemProps = ['string', number, boolean] | null; 