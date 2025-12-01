import * as DOM from "./DOM.js";
import { transition } from "./transition.js";
window.addEventListener("DOMContentLoaded", () => {
    DOM.init();
    transition(DOM.startSection);
    DOM.startBtn.addEventListener("click", () => {
        transition(DOM.startSection);
        transition(DOM.categorySection);
        DOM.categories.forEach((category) => {
            category.addEventListener("click", () => {
                transition(DOM.categorySection);
                transition(DOM.mainContent);
                transition(DOM.footer);
            });
        });
    });
});
// function transition(e: HTMLElement): void
// { e.classList.toggle('visible', !e.classList.toggle('hidden')); }
