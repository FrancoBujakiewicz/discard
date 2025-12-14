
 export class Pool {

    public lang: string[] = [];
    public linux: string[] = [];
    public dev: string[] = [];
    public framework: string[] = [];
    public llm: string[] = [];
    public person: string[] = [];

    static async new(): Promise<Pool> {

       const pool = new Pool();
       await pool.init();
       return pool;

    }

    public async init(): Promise<void> {

        const pool = await fetch("pool.json").then(r => r.json());

        this.lang = this.shuffle(pool.lang);
        this.linux = this.shuffle(pool.linux);
        this.dev = this.shuffle(pool.dev);
        this.framework = this.shuffle(pool.framework);
        this.llm = this.shuffle(pool.llm);
        this.person = this.shuffle(pool.person);

    }

    private shuffle(array: string[]): string[] {

        const shuffled = [...array];

        for(let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

        }

        return shuffled;

    }

 }

