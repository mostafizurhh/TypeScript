//GENERICS
//need to use <T extends (type)>(type:T)
const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

let User = addID({
    name: 'mahi',
    age: 15,
    country: 'Bangladesh'
})

