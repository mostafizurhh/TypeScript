"use strict";
//DOM Manipulation in TypeScript
var myBtn = document.getElementById('submitBtn');
var input = document.getElementById('input');
var handleClick = function (event) {
    var _a;
    var target = event.target;
    var p = document.createElement('p');
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
myBtn === null || myBtn === void 0 ? void 0 : myBtn.addEventListener('click', handleClick);
