let startBtn;
let categorySection;
let categories;
let startSection;
let mainContent;
let footer;
export { startBtn, categorySection, categories, startSection, mainContent, footer };
export function init() {
    startBtn = document.getElementById('startBtn');
    categorySection = document.getElementById('categories');
    categories = document.querySelectorAll('.category');
    startSection = document.getElementById('startSection');
    mainContent = document.querySelector('main');
    footer = document.querySelector('footer');
}
