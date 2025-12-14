import { Pool } from "./Pool.js";
export class State {
    constructor() {
        this.pool = null;
        this.actualCategory = '';
        this.actualPool = [];
        this.count = 0;
    }
    async initPool() { this.pool = await Pool.new(); }
    setCategory(categoryId) {
        this.actualCategory = categoryId;
        this.actualPool = this.pool[categoryId];
        this.count = 0;
    }
    getCurrentPair() {
        return {
            category: this.actualCategory,
            opt1: this.actualPool[this.count],
            opt2: this.actualPool[this.count + 1]
        };
    }
    advance() { this.count += 2; }
    poolHasMore() { return this.count < this.actualPool.length; }
}
export const state = new State();
