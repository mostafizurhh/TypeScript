export class driver {
    constructor(nam, ag, add) {
        this.nam = nam;
        this.ag = ag;
        this.add = add;
    }
    playing() {
        console.log(`${this.nam} is ${this.ag} years old and from ${this.add}`);
    }
}
