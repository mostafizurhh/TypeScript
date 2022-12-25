"use strict";
var message = "Hello TypeScript";
console.log(message, language);
//Primitive Types, Union Types, Inferred Type
//single line dynamic primitive/inferred type
var myname = 'ami';
var number = 12;
var isMarried = true;
var array = [1, 21, 3, 4];
var arr = ['a', 's', 'd'];
var obj = { 'a': 1, 'b': '2', 'c': 3 };
//multiline primitive type
var he; /* he's value could be any unless we define any type for it */
he = 'uncle';
he = 22;
he = true;
// declare a type for variable 
var she; /* cann't declare any other type for the variable 'she' */
she = 'tumi';
// she = true
// she = 14
// Union type could be a mixture of variable types 
var mixture;
mixture = 'ami';
mixture = 15;
mixture = true;
// mixture = [1,2,3] this will not work
// variable declare with const will be only that type 
var type = 12;
var script = true;
// variable type could be any value we want
var exam;
exam = 'math';
exam = 16;
/* *********************************** */
