
 let startBtn: HTMLElement;
 let categorySection: HTMLElement;
 let categories: NodeListOf<HTMLButtonElement>;
 let startSection: HTMLElement;
 let mainContent: HTMLElement;
 let footer: HTMLElement;

 export { startBtn, categorySection, categories, startSection, mainContent, footer };

 export function init() {

    startBtn = document.getElementById('startBtn')!;
    categorySection = document.getElementById('categories')!;
    categories = document.querySelectorAll<HTMLButtonElement>('.category')!;
    startSection = document.getElementById('startSection')!;
    mainContent = document.querySelector('main')!;
    footer = document.querySelector('footer')!;

 }

