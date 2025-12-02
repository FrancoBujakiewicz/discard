
 export function toggle(e: HTMLElement): void

 { e.classList.toggle('visible', !e.classList.toggle('hidden')); }

 export function show(e: HTMLElement) {

    e.classList.remove("visible");
    e.classList.add("hidden");

    e.ontransitionend = () => {

        e.classList.remove("hidden");
        e.classList.add("visible");
        e.ontransitionend = null;

    };

 }

