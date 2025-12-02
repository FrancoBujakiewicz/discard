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
window.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    DOM.init();
    const pool = yield Pool.new();
    Transitions.toggle(DOM.startSection);
    DOM.startBtn.addEventListener("click", () => {
        Transitions.toggle(DOM.startSection);
        Transitions.toggle(DOM.categorySection);
        DOM.categories.forEach((category) => {
            category.addEventListener("click", () => {
                Transitions.toggle(DOM.categorySection);
                Transitions.toggle(DOM.mainContent);
                Transitions.toggle(DOM.footer);
                const selectedCategory = category.id;
                const actualPool = pool[selectedCategory];
                DOM.options.forEach((option) => option.addEventListener("click", () => Transitions.show(DOM.optionsArticle)));
            });
        });
    });
}));
