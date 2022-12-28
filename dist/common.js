"use strict";
//(null, undefined, any) type, Type Assertions(As), non-null Assertion Operator(Postfix!), optional Chaining(?.), Literal Types(value as type), Literal Interface(as const)
let user = null; //null & undefined type
user = {
    name: 'user',
    email: 'ami@gmail.com'
};
user === null || user === void 0 ? void 0 : user.email; //optional chaining
let user1 = {};
const user3 = {
    name: 'user',
    email: 'ami@gmail.com'
}; //as constant
let description = {};
const friend = ['ami', 'tumi'];
friend.forEach(fr => {
    description[fr] = fr + 'on fire';
});
