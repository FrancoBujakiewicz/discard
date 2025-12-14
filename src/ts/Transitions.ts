
 import * as DOM from "./DOM.js";

 export function toggle(e: HTMLElement): void

 { e.classList.toggle('visible', !e.classList.toggle('hidden')); }

 export function show(e: HTMLElement) {

    e.classList.remove("visible");
    e.classList.add("hidden");

    e.ontransitionend = () => {

        e.classList.remove("hidden");
        e.classList.add("visible");
        e.ontransitionend = null;

    };

 }

 const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

 export async function showOptions(category: string, opt1: string, opt2: string) {

   toggle(DOM.loading);

   DOM.options[0].setContent({ category: category, poolElement: opt1 });
   DOM.options[1].setContent({ category: category, poolElement: opt2 });

   await delay(10);
   await delay(1000);

   toggle(DOM.optionDiv);
   toggle(DOM.loading);

 }

