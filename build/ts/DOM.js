import { Option } from "../components/option/Option.js";
import { Category } from "../components/category/Category.js";
customElements.define('option-button', Option);
customElements.define('category-button', Category);
let mainContent;
let startSection;
let categories;
let optionHeader;
let optionDiv;
let options;
let loading;
let footer;
let endMessage;
export { mainContent, startSection, categories, optionHeader, optionDiv, options, loading, footer, endMessage };
export function init() {
    mainContent = document.querySelector('main');
    startSection = document.getElementById('startSection');
    categories = document.querySelectorAll('category-button');
    optionHeader = document.getElementById('optionHeader');
    optionDiv = document.getElementById('options');
    options = document.querySelectorAll('option-button');
    loading = document.getElementById('loading');
    footer = document.querySelector('footer');
    endMessage = document.getElementById('endMessage');
}
