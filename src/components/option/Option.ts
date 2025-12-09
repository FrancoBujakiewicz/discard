
 export class Option extends HTMLElement {

    private img: HTMLImageElement;
    private h2: HTMLHeadingElement;

    constructor() {

       super();

       this.innerHTML = `<button><img></button><h2></h2>`;

       this.img = this.querySelector('img')!;
       this.h2 = this.querySelector('h2')!;

    }

    setContent(category: string, poolElement: string): void {

       this.img.src = `img/${category}/${poolElement}`;
       this.h2.textContent = poolElement.split(".")[0];

    }

 }

