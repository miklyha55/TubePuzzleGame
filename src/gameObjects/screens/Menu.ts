import GameObject from "../../core/gameObject/GameObject";

import Title from "../ui/menu/Title";
import Button from "../ui/menu/Button";

export default class Menu extends GameObject {
    constructor() {
        super({
            landscape: {
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });
    }

    override onInit(): void {
        const title: Title = new Title();
        const button: Button = new Button();

        this.addChild(title);
        title.init();
        
        this.addChild(button);
        button.init();
    }
}
