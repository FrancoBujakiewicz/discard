import * as DOM from "./DOM.js";
import * as Transitions from "./Transitions.js";
import { state } from "./State.js";
window.addEventListener("DOMContentLoaded", async () => {
    DOM.init();
    await state.initPool();
    Transitions.toggle(DOM.startSection);
    /*       DOM.categories.forEach((category) => {
    
             category.addEventListener("click", async () => {
    
                  const actualCategory = category.id;
                 const actualPool = pool[actualCategory];
              let count = 0;
    
                 Transitions.toggle(DOM.optionHeader);
                 Transitions.toggle(DOM.footer);
    
                 Transitions.toggle(DOM.startSection);
                 Transitions.toggle(DOM.loading);
                 DOM.options[0].setContent({
    
                       category: actualCategory,
                       poolElement: actualPool[count]
    
                    });
    
                    DOM.options[1].setContent({
    
                       category: actualCategory,
                   poolElement: actualPool[count+1]
    
                    });
    
                    await delay(10);
                    await delay(1000);
    
                 Transitions.toggle(DOM.optionDiv);
                 Transitions.toggle(DOM.loading);
    
                 count = count + 2;
                 DOM.options.forEach((option, index) =>
    
                    option.addEventListener("click", async () => {
    
                    if(count < actualPool.length) {
    
            Transitions.toggle(DOM.optionDiv);
                    Transitions.toggle(DOM.loading);
    
                    DOM.options[0].setContent({
    
                       category: actualCategory,
                       poolElement: actualPool[count]
    
                    });
    
                    DOM.options[1].setContent({
    
                       category: actualCategory,
                   poolElement: actualPool[count+1]
    
                    });
    
                    await delay(10);
                    await delay(1000);
    
                    Transitions.toggle(DOM.loading);
            Transitions.toggle(DOM.optionDiv);
                    count = count + 2;
                  
                    } else {
    
                       Transitions.toggle(DOM.optionDiv);
                   Transitions.toggle(DOM.optionHeader);
                       Transitions.toggle(DOM.footer);
                   Transitions.toggle(DOM.endMessage);
    
                    }
    
                    })
    
    
                );
    
              });
    
           });  */
});
