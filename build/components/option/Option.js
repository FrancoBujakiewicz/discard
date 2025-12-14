import { state } from "../../State.js";
import * as DOM from "../../DOM.js";
import * as Transitions from "../../Transitions.js";
export class Option extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<button><img></button><h2></h2>`;
        this.img = this.querySelector('img');
        this.h2 = this.querySelector('h2');
        this.addEventListener("click", async () => {
            if (state.poolHasMore()) {
                Transitions.toggle(DOM.optionDiv);
                const { category, opt1, opt2 } = state.getCurrentPair();
                await Transitions.showOptions(category, opt1, opt2);
                state.advance();
            }
            else {
                Transitions.toggle(DOM.optionDiv);
                Transitions.toggle(DOM.optionHeader);
                Transitions.toggle(DOM.footer);
                Transitions.toggle(DOM.endMessage);
            }
        });
    }
    setContent({ category, poolElement }) {
        this.img.src = `img/${category}/${poolElement}`;
        this.h2.textContent = poolElement.split(".")[0];
    }
}
