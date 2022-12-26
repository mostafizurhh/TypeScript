//Explore Type Aliases
type ami = string; /* to create your own type write the type keyword and then the type you want */
let mi: ami = 'mi'

//there could be one or more types for dynamic type
type tumi = string | number | boolean
let um: tumi = true

//tuple aliases
type arrAY = [string, boolean, number, boolean];
let Arr: arrAY = ['a', true, 2, false]

//function aliases
type fn = (num1: number, num2: number, num3: number) => number;
let ADd: fn = (num1, num2, num3 = 0) => {
    return num1 + num2 + num3
}
const result7 = ADd(10, 25, 29)

//object aliases
type obj = {
    name: string,
    age: number,
    phone: number | string | string[],
    email: string,
    favorite: {
        type: 'food' | 'player' | 'book'
        value: string
    }[]
}

let object: obj = {
    name: 'ami',
    age: 25,
    phone: '02151456412',
    email: 'ojnhj@gmail.com',
    favorite: [
        {
            type: 'food',
            value: 'vat'
        }
    ]
}