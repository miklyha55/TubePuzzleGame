import { IUriLinks } from "./types";

import bgMenu from "../assets/images/bgMenu.png";
import bgLevel from "../assets/images/bgLevel.png";

import pipe1 from "../assets/images/pipes/pipe1.png";
import pipe1Active from "../assets/images/pipes/pipe1_a.png";

import pipe2 from "../assets/images/pipes/pipe2.png";
import pipe2Active from "../assets/images/pipes/pipe2_a.png";

import pipe3 from "../assets/images/pipes/pipe_3.png";
import pipe3Active from "../assets/images/pipes/pipe_3_a.png";

export const textureAssets: IUriLinks = {
    bgMenu,
    bgLevel,
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
    }
};

export const fontAssets: IUriLinks = {};

export const soundAssets: IUriLinks = {};

import game from "../assets/jsons/game.json";

export const jsonsAssets: IUriLinks = {
    game,
};
