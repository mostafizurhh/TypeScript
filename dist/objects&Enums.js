"use strict";
var _a;
//Object and Enums in TypeScript
var player;
player = {
    name: 'messi',
    age: 36,
    married: 1,
    clubs: ['barca', 'psg'],
    country: 'argentina'
};
player.age = player.age + 5; /* to change any optional property value */
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); }); /* to change any optional array property value */
/* ***************************************** */
var friends;
(function (friends) {
    friends[friends["ami"] = 0] = "ami";
    friends[friends["tumi"] = 1] = "tumi";
    friends[friends["he"] = 2] = "he";
    friends[friends["she"] = 3] = "she";
})(friends || (friends = {}));
(function (friends) {
    friends[friends["Ami"] = 10] = "Ami";
    friends[friends["Tumi"] = 7] = "Tumi";
    friends[friends["He"] = 2] = "He";
    friends[friends["She"] = 9] = "She";
})(friends || (friends = {}));
var secrect;
(function (secrect) {
    secrect["API_Key"] = "api key";
    secrect["Stripe_Key"] = "st0458";
})(secrect || (secrect = {}));
