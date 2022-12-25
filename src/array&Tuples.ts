// Array and Tuples in TypeScript
let myArray: string[] | number[] | boolean[] /* cann't change any index value and consider the lase declared array type when pushing a value */
myArray = [1, 2, 3]
myArray = ['a', 'b']
myArray = [true, false]

//myArray[2] = 'hi'


let newArray: (string | number | boolean)[];
newArray = [1, 2, 's', true]
newArray[3] = 'b'

//tuples
let tupleArray: [string, boolean, number, [], {}]
tupleArray = ['a', true, 2, [], {}]
// tupleArray[2] = 'mn'