//Explore Interfaces And Difference Between Type Alias And Interface
interface person {
    name: string,
    email: string,
    hasjob: boolean
}

let Person: person = {
    name: 'ami',
    email: 'ami@gmail.com',
    hasjob: false
}

//extends interface
interface obje extends person {
    name: string,
    age: number,
    phone: number | string | string[],
    email: string,
    favorite: {
        type: 'food' | 'player' | 'book'
        value: string
    }[]
}

let object1: obje = {
    name: 'ami',
    age: 25,
    phone: '02151456412',
    email: 'ojnhj@gmail.com',
    favorite: [
        {
            type: 'food',
            value: 'vat'
        }
    ],
    hasjob: false
}