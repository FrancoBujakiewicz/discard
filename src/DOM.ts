
 let startBtn: HTMLElement;
 let categorySection: HTMLElement;
 let categories: NodeListOf<HTMLButtonElement>;
 let startSection: HTMLElement;
 let mainContent: HTMLElement;
 let optionsArticle: HTMLElement;
 let options: NodeListOf<HTMLButtonElement>;
 let footer: HTMLElement;

 export {

    startBtn,
    categorySection,
    categories,
    startSection,
    mainContent,
    optionsArticle,
    options,
    footer

 };

 export function init() {

    startBtn = document.getElementById('startBtn')!;
    categorySection = document.getElementById('categories')!;
    categories = document.querySelectorAll<HTMLButtonElement>('.category')!;
    startSection = document.getElementById('startSection')!;
    mainContent = document.querySelector('main')!;
    optionsArticle = document.getElementById('optionsArticle')!;
    options = document.querySelectorAll<HTMLButtonElement>('.option')!;
    footer = document.querySelector('footer')!;

 }

