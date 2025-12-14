
 import * as DOM from "./DOM.js";
 import * as Transitions from "./Transitions.js"
 import { state } from "./State.js"

 window.addEventListener("DOMContentLoaded", async () => {

    DOM.init();
    await state.initPool();
    Transitions.toggle(DOM.startSection);

 });

