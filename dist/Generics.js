"use strict";
//GENERICS
//need to use <T extends (type)>(type:T)
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let User = addID({
    name: 'mahi',
    age: 15,
    country: 'Bangladesh'
});
