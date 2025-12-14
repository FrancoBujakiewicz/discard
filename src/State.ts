
 import { Pool } from "./Pool.js";

 export class State {

    private pool: Pool | null = null;
    private actualCategory: string = '';
    private actualPool: string[] = [];
    private count: number = 0;

    async initPool() { this.pool = await Pool.new(); }

    setCategory(categoryId: string) {

       this.actualCategory = categoryId;
       this.actualPool = this.pool![categoryId];
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

   poolHasMore(): boolean { return this.count < this.actualPool.length; }

 }

 export const state = new State();

