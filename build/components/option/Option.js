export class Option extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<button><img></button><h2></h2>`;
        this.img = this.querySelector('img');
        this.h2 = this.querySelector('h2');
    }
    setContent(category, poolElement) {
        this.img.src = `img/${category}/${poolElement}`;
        this.h2.textContent = poolElement.split(".")[0];
    }
}
// customElements.define('option-button', Option);
