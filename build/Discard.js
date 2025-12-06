var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as DOM from "./DOM.js";
import * as Transitions from "./Transitions.js";
import { Pool } from "./Pool.js";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
window.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    DOM.init();
    const pool = yield Pool.new();
    Transitions.toggle(DOM.startSection);
    DOM.startBtn.addEventListener("click", () => {
        Transitions.toggle(DOM.startSection);
        Transitions.toggle(DOM.categorySection);
        DOM.categories.forEach((category) => {
            category.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
                Transitions.toggle(DOM.categorySection);
                Transitions.toggle(DOM.mainHeader);
                Transitions.toggle(DOM.footer);
                Transitions.toggle(DOM.loading);
                yield delay(10);
                yield delay(1000);
                Transitions.toggle(DOM.optionsArticle);
                Transitions.toggle(DOM.loading);
                const actualCategory = category.id;
                const actualPool = pool[actualCategory];
                let count = 0;
                DOM.img_1.src = `img/${actualCategory}/${actualPool[count]}`;
                DOM.h2_1.textContent = actualPool[count].split(".")[0];
                DOM.img_2.src = `img/${actualCategory}/${actualPool[count + 1]}`;
                DOM.h2_2.textContent = actualPool[count + 1].split(".")[0];
                count = count + 2;
                DOM.options.forEach((option) => option.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
                    if (count < actualPool.length) {
                        Transitions.toggle(DOM.optionsArticle);
                        Transitions.toggle(DOM.loading);
                        yield delay(10);
                        yield delay(1000);
                        Transitions.toggle(DOM.loading);
                        Transitions.toggle(DOM.optionsArticle);
                        DOM.img_1.src = `img/${actualCategory}/${actualPool[count]}`;
                        DOM.h2_1.textContent = actualPool[count].split(".")[0];
                        DOM.img_2.src = `img/${actualCategory}/${actualPool[count + 1]}`;
                        DOM.h2_2.textContent = actualPool[count + 1].split(".")[0];
                        count = count + 2;
                    }
                    else {
                        Transitions.toggle(DOM.optionsArticle);
                        Transitions.toggle(DOM.mainHeader);
                        Transitions.toggle(DOM.footer);
                        Transitions.toggle(DOM.endMessage);
                    }
                })));
            }));
        });
    });
}));
