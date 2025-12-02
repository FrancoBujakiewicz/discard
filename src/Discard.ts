
 import * as DOM from "./DOM.js";
 import * as Transitions from "./Transitions.js"
 import { Pool } from "./Pool.js"

 window.addEventListener("DOMContentLoaded", async () => {

    DOM.init();

    const pool = await Pool.new();

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

             DOM.options.forEach((option) => option.addEventListener
             ("click", () => Transitions.show(DOM.optionsArticle)));

          });

       });

    });

 });

