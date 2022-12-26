"use strict";
var Person = {
    name: 'ami',
    email: 'ami@gmail.com',
    hasjob: false
};
var object1 = {
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
typeof object1.phone === 'string' || object1.phone.map(function (val) { return val.toLowerCase; });
!(typeof object1.phone === 'string') && object1.phone.map(function (val) { return val.toLowerCase; });
Array.isArray(object1.phone) && object1.phone.map(function (val) { return val.toLowerCase; });
if (Array.isArray(object1.phone)) {
    object1.phone.map(function (val) { return val.toLowerCase; });
}
else {
    object1.phone.toLowerCase;
}
