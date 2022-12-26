//(null, undefined, any) type, Type Assertions(As), non-null Assertion Operator(Postfix!), optional Chaining(?.), Literal Types(value as type), Literal Interface(as const)

interface User {
    name: string,
    email: string
}



let user: User | null | undefined = null; //null & undefined type

user = {
    name: 'user',
    email: 'ami@gmail.com'
}
user?.email //optional chaining

let user1 = {} as User;

const user3 = {
    name: 'user',
    email: 'ami@gmail.com'
} as const; //as constant

//Literal interface as const
interface Description {
    ami: string,
    tumi: string
}
let description: Description = {} as Description;
const friend = ['ami', 'tumi'] as const;

friend.forEach(fr => {
    description[fr] = fr + 'on fire'
})