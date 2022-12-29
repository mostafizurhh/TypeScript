"use strict";
//ENUM Type
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCESS"] = 0] = "SUCCESS";
    Rtype[Rtype["ERROR"] = 1] = "ERROR";
    Rtype[Rtype["FORBIDDEN"] = 2] = "FORBIDDEN";
    Rtype[Rtype["UNAUTHORIZED"] = 3] = "UNAUTHORIZED";
})(Rtype || (Rtype = {}));
const RESPONSE = {
    status: 200,
    Type: Rtype.UNAUTHORIZED,
    data: {
        name: 'api',
        job: 'checking'
    }
};
console.log(RESPONSE);
