"use strict";
const message = "Hello TypeScript";
console.log(message);
//Primitive Types, Union Types, Inferred Type
//single line dynamic primitive/inferred type
let myname = 'ami';
let number = 12;
let isMarried = true;
let array = [1, 21, 3, 4];
let arr = ['a', 's', 'd'];
let obj = { 'a': 1, 'b': '2', 'c': 3 };
//multiline primitive type
let he; /* he's value could be any unless we define any type for it */
he = 'uncle';
he = 22;
he = true;
// declare a type for variable 
let she; /* cann't declare any other type for the variable 'she' */
she = 'tumi';
// she = true
// she = 14
// Union type could be a mixture of variable types 
let mixture;
mixture = 'ami';
mixture = 15;
mixture = true;
// mixture = [1,2,3] this will not work
// variable declare with const will be only that type 
const type = 12;
const script = true;
// variable type could be any value we want
let exam;
exam = 'math';
exam = 16;
/* *********************************** */
