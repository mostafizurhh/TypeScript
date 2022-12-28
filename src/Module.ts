export class driver { //to import and export we need to update tsconfig.json file >> target = ES6, "module": "ES2015", 
    constructor(
        private nam: string,
        readonly ag: number,
        public add: string,
    ) { }

    playing() {
        console.log(`${this.nam} is ${this.ag} years old and from ${this.add}`)
    }
}