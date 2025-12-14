import * as DOM from "./DOM.js";
export function toggle(e) { e.classList.toggle('visible', !e.classList.toggle('hidden')); }
export function show(e) {
    e.classList.remove("visible");
    e.classList.add("hidden");
    e.ontransitionend = () => {
        e.classList.remove("hidden");
        e.classList.add("visible");
        e.ontransitionend = null;
    };
}
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export async function showOptions(category, opt1, opt2) {
    toggle(DOM.loading);
    DOM.options[0].setContent({ category: category, poolElement: opt1 });
    DOM.options[1].setContent({ category: category, poolElement: opt2 });
    await delay(10);
    await delay(1000);
    toggle(DOM.optionDiv);
    toggle(DOM.loading);
}
