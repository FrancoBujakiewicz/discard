var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Pool {
    constructor() {
        this.lang = [];
        this.linux = [];
        this.dev = [];
        this.framework = [];
        this.llm = [];
        this.person = [];
    }
    static new() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = new Pool();
            yield pool.init();
            return pool;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield fetch("pool.json").then(r => r.json());
            this.lang = this.shuffle(pool.lang);
            this.linux = this.shuffle(pool.linux);
            this.dev = this.shuffle(pool.dev);
            this.framework = this.shuffle(pool.framework);
            this.llm = this.shuffle(pool.llm);
            this.person = this.shuffle(pool.person);
        });
    }
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
