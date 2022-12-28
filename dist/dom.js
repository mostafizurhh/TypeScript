"use strict";
//DOM Manipulation in TypeScript
const myBtn = document.getElementById('submitBtn');
const input = document.getElementById('input');
const handleClick = (event) => {
    var _a;
    const target = event.target;
    const p = document.createElement('p');
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
myBtn === null || myBtn === void 0 ? void 0 : myBtn.addEventListener('click', handleClick);
