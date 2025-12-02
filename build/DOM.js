let startBtn;
let categorySection;
let categories;
let startSection;
let mainContent;
let optionsArticle;
let options;
let footer;
export { startBtn, categorySection, categories, startSection, mainContent, optionsArticle, options, footer };
export function init() {
    startBtn = document.getElementById('startBtn');
    categorySection = document.getElementById('categories');
    categories = document.querySelectorAll('.category');
    startSection = document.getElementById('startSection');
    mainContent = document.querySelector('main');
    optionsArticle = document.getElementById('optionsArticle');
    options = document.querySelectorAll('.option');
    footer = document.querySelector('footer');
}
