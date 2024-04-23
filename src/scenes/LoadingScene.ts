import { Container } from "pixi.js";

import { load } from "../configs/loader";

export default class LoadingScene extends Container {
    constructor() {
        super();
    }

    public async create(): Promise<void> {
        await load();
        document.getElementById("loader_screen")?.remove();
    }
}
