import { state } from "../../ts/State.js";
import * as DOM from "../../ts/DOM.js";
import * as Transitions from "../../ts/Transitions.js";
export class Category extends HTMLElement {
    constructor() {
        super();
        const text = this.textContent;
        this.innerHTML = `<button><img></button>`;
        this.img = this.querySelector('img');
        this.querySelector('button').append(text || '');
        this.addEventListener("click", async () => {
            state.setCategory(this.id);
            Transitions.toggle(DOM.optionHeader);
            Transitions.toggle(DOM.footer);
            Transitions.toggle(DOM.startSection);
            const { category, opt1, opt2 } = state.getCurrentPair();
            await Transitions.showOptions(category, opt1, opt2);
            state.advance();
        });
        this.setContent();
    }
    setContent() { this.img.src = `static/img/category/${this.id}.png`; }
}
