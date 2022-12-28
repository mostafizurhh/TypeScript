"use strict";
//Classes in typeScript
var players = /** @class */ (function () {
    function players(n, a, ad) {
        this.name = n;
        this.age = a;
        this.address = ad;
    }
    players.prototype.play = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old and from ").concat(this.address));
    };
    return players;
}());
var sakib = new players('Sakib', 35, 'Khulna');
var mushfiq = new players('Mushfiq', 32, 'Rajshahi');
var mahmud = new players('Mahmud', 38, 'Dhaka');
var my_Player = [];
my_Player.push(sakib);
my_Player.push(mushfiq);
my_Player.push(mahmud);
console.log(my_Player[2].name);
//Access modifier for class
var driver = /** @class */ (function () {
    function driver(nam, ag, add) {
        this.nam = nam;
        this.ag = ag;
        this.add = add;
    }
    driver.prototype.playing = function () {
        console.log("".concat(this.nam, " is ").concat(this.ag, " years old and from ").concat(this.add));
    };
    return driver;
}());
var Saki = new driver('Saki', 35, 'Khulna');
var Mushfi = new driver('Mushfi', 32, 'Rajshahi');
Saki.nam; //Property 'nam' is private and only accessible within class driver
Saki.ag = 35; //Cannot assign to 'ag' because it is a read-only property.
var my_driver = [];
