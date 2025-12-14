import * as DOM from "./ts/DOM.js";
import * as Transitions from "./ts/Transitions.js";
import { state } from "./ts/State.js";
window.addEventListener("DOMContentLoaded", async () => {
    DOM.init();
    await state.initPool();
    Transitions.toggle(DOM.startSection);
});
