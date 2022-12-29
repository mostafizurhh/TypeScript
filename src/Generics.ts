//GENERICS
//need to use <T extends (type ex: {},[])>(type:T)
const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

let User = addID({
    name: 'mahi',
    age: 15,
    country: 'Bangladesh'
})

// Generics with Interface

interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response: APIResponse<object> = {
    status: 200,
    type: 'ok',
    data: {
        name: 'api',
        job: 'checking'
    }
}