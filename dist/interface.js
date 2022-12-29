"use strict";
let Person = {
    name: 'ami',
    email: 'ami@gmail.com',
    hasjob: false
};
let object1 = {
    name: 'ami',
    age: 25,
    phone: ['02151456412'],
    email: 'ojnhj@gmail.com',
    favorite: [
        {
            type: 'food',
            value: 'vat'
        }
    ],
    hasjob: false
};
//access the object1's phone property's string array
typeof object1.phone === 'string' || object1.phone.map(val => val.toLowerCase);
!(typeof object1.phone === 'string') && object1.phone.map(val => val.toLowerCase);
Array.isArray(object1.phone) && object1.phone.map(val => val.toLowerCase);
if (Array.isArray(object1.phone)) {
    object1.phone.map(val => val.toLowerCase);
}
else {
    object1.phone.toLowerCase;
}
function drawRectangle(options) {
    let width = options.width;
    let height = options.height;
}
let threedRectangle = {
    width: 20,
    height: 30,
    length: 40
};
//drawRectangle(20,30)
drawRectangle(threedRectangle);
