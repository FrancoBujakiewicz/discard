
 import { Option } from "../components/option/Option.js"
 import { Category } from "../components/category/Category.js"

 customElements.define('option-component', Option);
 customElements.define('category-component', Category);

 let mainContent: HTMLElement;
 let startSection: HTMLElement;
 let categories: NodeListOf<Category>;
 let optionHeader: HTMLElement;
 let optionDiv: HTMLElement;
 let options: NodeListOf<Option>;
 let loading: HTMLElement;
 let footer: HTMLElement;
 let endMessage: HTMLElement;

 export {

    mainContent,
    startSection,
    categories,
    optionHeader,
    optionDiv,
    options,
    loading,
    footer,
    endMessage

 };

 export function init() {

    mainContent = document.querySelector('main')!;
    startSection = document.getElementById('startSection')!;
    categories = document.querySelectorAll<Category>('category-component')!;
    optionHeader = document.getElementById('optionHeader')!;
    optionDiv = document.getElementById('options')!;
    options = document.querySelectorAll<Option>('option-component')!;
    loading = document.getElementById('loading')!;
    footer = document.querySelector('footer')!;
    endMessage = document.getElementById('endMessage')!;

 }

