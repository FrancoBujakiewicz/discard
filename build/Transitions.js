export function toggle(e) { e.classList.toggle('visible', !e.classList.toggle('hidden')); }
export function show(e) {
    e.classList.remove("visible");
    e.classList.add("hidden");
    e.ontransitionend = () => {
        e.classList.remove("hidden");
        e.classList.add("visible");
        e.ontransitionend = null;
    };
}
