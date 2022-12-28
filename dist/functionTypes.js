"use strict";
//Function types(Parameter, return, anonymous/callback, function signature, optional parameter/default parameter)
//anonymous function
function add(num1, num2) {
    return (num1 + num2);
}
add(10, 20); /* set parameter type when calling the function  */
//named function
const Add = function (num1, num2) {
    return (num1 + num2);
};
const result = Add(15, 21);
console.log(result);
//arrow function
// const ADD = (num1:number,num2:number)=> console.log (num1+num2)
const ADD = (num1, num2) => {
    return (num1 + num2);
};
const result1 = ADD(20, 30);
//function with array
const ADDition = (num1, num2, num3) => {
    return (num1 + num2 + num3[0] + num3[1]);
};
const result2 = ADDition(10, 20, [30, 20]);
//optional chaining
const ADDITION = (num1, num2, num3) => {
    return (num1 + num2 + (num3 || 0)); /* if num3 has value then function will count that value otherwise it will count 0 as the value of num3 */
};
const result3 = ADDITION(25, 28);
//default value of a parameter
const Addition = (num1, num2, num3 = 10) => {
    return (num1 + num2 + num3);
};
const result4 = Addition(15, 20);
//addition with rest operator
const total = (...numbers) => {
    return numbers.reduce((pre, cur) => pre + cur, 0);
};
const result5 = total(10, 250, 369);
//addition with call back function
const total1 = (...numbers) => {
    const func = (pre, cur) => pre + cur;
    return numbers.reduce(func, 0);
};
const result6 = total(10, 250, 3);
//function signature
//typescript can detect the function type dynamically, this is called function signature
