"use strict";
//Function types(Parameter, return, anonymous/callback, function signature, optional parameter/default parameter)
//anonymous function
function add(num1, num2) {
    return (num1 + num2);
}
add(10, 20); /* set parameter type when calling the function  */
//named function
var Add = function (num1, num2) {
    return (num1 + num2);
};
var result = Add(15, 21);
console.log(result);
//arrow function
// const ADD = (num1:number,num2:number)=> console.log (num1+num2)
var ADD = function (num1, num2) {
    return (num1 + num2);
};
var result1 = ADD(20, 30);
//function with array
var ADDition = function (num1, num2, num3) {
    return (num1 + num2 + num3[0] + num3[1]);
};
var result2 = ADDition(10, 20, [30, 20]);
//optional chaining
var ADDITION = function (num1, num2, num3) {
    return (num1 + num2 + (num3 || 0)); /* if num3 has value then function will count that value otherwise it will count 0 as the value of num3 */
};
var result3 = ADDITION(25, 28);
//default value of a parameter
var Addition = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return (num1 + num2 + num3);
};
var result4 = Addition(15, 20);
//addition with rest operator
var total = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (pre, cur) { return pre + cur; }, 0);
};
var result5 = total(10, 250, 369);
//addition with call back function
var total1 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var func = function (pre, cur) { return pre + cur; };
    return numbers.reduce(func, 0);
};
var result6 = total(10, 250, 3);
//function signature
//typescript can detect the function type dynamically, this is called function signature
