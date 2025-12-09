import * as DOM from "./DOM.js";
import * as Transitions from "./Transitions.js";
import { Pool } from "./Pool.js";
import { Option } from "./components/option/Option.js";
customElements.define('option-button', Option);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
window.addEventListener("DOMContentLoaded", async () => {
    DOM.init();
    const pool = await Pool.new();
    Transitions.toggle(DOM.startSection);
    // await customElements.whenDefined('option-button');
    const opt1 = document.getElementById('opt1');
    const opt2 = document.getElementById('opt2');
    const options = [opt1, opt2];
    DOM.startBtn.addEventListener("click", () => {
        Transitions.toggle(DOM.startSection);
        Transitions.toggle(DOM.categorySection);
        DOM.categories.forEach((category) => {
            category.addEventListener("click", async () => {
                const actualCategory = category.id;
                const actualPool = pool[actualCategory];
                let count = 0;
                Transitions.toggle(DOM.categorySection);
                Transitions.toggle(DOM.mainHeader);
                Transitions.toggle(DOM.footer);
                Transitions.toggle(DOM.loading);
                opt1.setContent(actualCategory, actualPool[count]);
                opt2.setContent(actualCategory, actualPool[count + 1]);
                /*
                DOM.img_1.src = `img/${actualCategory}/${actualPool[count]}`;
                DOM.h2_1.textContent = actualPool[count].split(".")[0];
                DOM.img_2.src = `img/${actualCategory}/${actualPool[count+1]}`;
                DOM.h2_2.textContent = actualPool[count+1].split(".")[0];
                */
                await delay(10);
                await delay(1000);
                Transitions.toggle(DOM.optionsArticle);
                Transitions.toggle(DOM.loading);
                count = count + 2;
                options.forEach((option, index) => option.addEventListener("click", async () => {
                    if (count < actualPool.length) {
                        Transitions.toggle(DOM.optionsArticle);
                        Transitions.toggle(DOM.loading);
                        /*
                            DOM.img_1.src = `img/${actualCategory}/${actualPool[count]}`;
                            DOM.h2_1.textContent = actualPool[count].split(".")[0];
                            DOM.img_2.src = `img/${actualCategory}/${actualPool[count+1]}`;
                            DOM.h2_2.textContent = actualPool[count+1].split(".")[0];
                            */
                        opt1.setContent(actualCategory, actualPool[count]);
                        opt2.setContent(actualCategory, actualPool[count + 1]);
                        await delay(10);
                        await delay(1000);
                        Transitions.toggle(DOM.loading);
                        Transitions.toggle(DOM.optionsArticle);
                        count = count + 2;
                    }
                    else {
                        Transitions.toggle(DOM.optionsArticle);
                        Transitions.toggle(DOM.mainHeader);
                        Transitions.toggle(DOM.footer);
                        Transitions.toggle(DOM.endMessage);
                    }
                }));
            });
        });
    });
});
