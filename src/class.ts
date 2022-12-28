//Classes in typeScript
class players {
    name: string;
    age: number;
    address: string;

    constructor(n: string, a: number, ad: string) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }

    play() {
        console.log(`${this.name} is ${this.age} years old and from ${this.address}`)
    }
}

const sakib = new players('Sakib', 35, 'Khulna')
const mushfiq = new players('Mushfiq', 32, 'Rajshahi')
const mahmud = new players('Mahmud', 38, 'Dhaka')

const my_Player: players[] = []

my_Player.push(sakib)
my_Player.push(mushfiq)
my_Player.push(mahmud)
console.log(my_Player[2].name)

//Access modifier for class
class driver {
    constructor(
        private nam: string,
        readonly ag: number,
        public add: string,
    ) { }

    playing() {
        console.log(`${this.nam} is ${this.ag} years old and from ${this.add}`)
    }
}
const Saki = new driver('Saki', 35, 'Khulna')
const Mushfi = new driver('Mushfi', 32, 'Rajshahi')
Saki.nam //Property 'nam' is private and only accessible within class driver
Saki.ag = 35 //Cannot assign to 'ag' because it is a read-only property.
const my_driver: driver[] = []