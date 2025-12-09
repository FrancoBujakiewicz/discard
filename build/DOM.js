let startBtn;
let categorySection;
let categories;
let startSection;
let mainContent;
let optionsArticle;
let options;
let footer;
// let img_1: HTMLImageElement;
// let h2_1: HTMLHeadingElement;
// let img_2: HTMLImageElement;
// let h2_2: HTMLHeadingElement;
let endMessage;
let mainHeader;
let loading;
export { startBtn, categorySection, categories, startSection, mainContent, optionsArticle, options, footer, 
//  img_1,
//  h2_1,
//  img_2,
//  h2_2,
endMessage, mainHeader, loading };
export function init() {
    startBtn = document.getElementById('startBtn');
    categorySection = document.getElementById('categories');
    categories = document.querySelectorAll('.category');
    startSection = document.getElementById('startSection');
    mainContent = document.querySelector('main');
    optionsArticle = document.getElementById('optionsArticle');
    options = document.querySelectorAll('.option');
    footer = document.querySelector('footer');
    // img_1 = options[0].querySelector("img") as HTMLImageElement;
    // h2_1 = options[0].querySelector("h2") as HTMLHeadingElement;
    // img_2 = options[1].querySelector("img") as HTMLImageElement;
    // h2_2 = options[1].querySelector("h2") as HTMLHeadingElement;
    endMessage = document.getElementById('endMessage');
    mainHeader = mainContent.querySelector('h1');
    loading = mainContent.querySelector('p');
}
