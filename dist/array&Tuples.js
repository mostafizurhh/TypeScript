"use strict";
// Array and Tuples in TypeScript
var myArray; /* cann't change any index value and consider the lase declared array type when pushing a value */
myArray = [1, 2, 3];
myArray = ['a', 'b'];
myArray = [true, false];
//myArray[2] = 'hi'
var newArray;
newArray = [1, 2, 's', true];
newArray[3] = 'b';
//tuples
var tupleArray;
tupleArray = ['a', true, 2, [], {}];
// tupleArray[2] = 'mn'
