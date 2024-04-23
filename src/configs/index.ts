import { IUriLinks } from "./types";

import bg from "../assets/images/bg.png";
import bg2 from "../assets/images/bg2.png";

import pipe1 from "../assets/images/pipes/pipeGrey_01.png";
import pipe1Active from "../assets/images/pipes/pipeGrey_07.png";

import pipe2 from "../assets/images/pipes/pipeGrey_03.png";
import pipe2Active from "../assets/images/pipes/pipeGrey_09.png";

import pipe3 from "../assets/images/pipes/pipeGrey_05.png";
import pipe3Active from "../assets/images/pipes/pipeGrey_11.png";

import pipe4 from "../assets/images/pipes/pipeGrey_06.png";
import pipe4Active from "../assets/images/pipes/pipeGrey_12.png";

export const textureAssets: IUriLinks = {
    bg,
    bg2,
    pipes: {
        pipe1: {
            base: pipe1,
            active: pipe1Active,
        },
        pipe2: {
            base: pipe2,
            active: pipe2Active,
        },
        pipe3: {
            base: pipe3,
            active: pipe3Active,
        },
        pipe4: {
            base: pipe4,
            active: pipe4Active,
        }
    }
};

export const fontAssets: IUriLinks = {};

export const soundAssets: IUriLinks = {};

import game from "../assets/jsons/game.json";

export const jsonsAssets: IUriLinks = {
    game,
};
