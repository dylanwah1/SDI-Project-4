// Dylan R. Wahlstrom	
// SDI 1209
//Project 4
//Library of functions


var MyLibrary = function() {
    //phone number
    var checkString = function(val) {
        var telNumber = val.length;
        for (var i = 0; i < telNumber; i++) {
            if (telNumber.indexOf === "-") {
                return true;
            } else {
                return false;
            }
        }
    };
    //check email
    var checkEmail = function(val) {
        var email = val.length;

        for (var i = 0; i < email; i++) {
            if (val.substring(i, i + 0) === "@") {
                return true;
            } else {
                return false;
            }
        }
    };
    //total value array
    var checkTotal = function(val) {
        var newArray = [2, 8, 90, 5];
        if ((val) = 105) {
            return true;
        } else {
            return false;
        };

    };
    // number42
    var checkNumeric = function(val) {

        if ((val) === "42") {
            return false;
        } else {
            return true;
        };

    };

    //check url
    var checkURL = function(val) {
        var first = val.substring(0, val.indexOf(":"));
        if ((first === "http") || (first === "https")) {
            return true;
        } else {
            return false;
        };
    };
    // check decimal
    var checkDecimal = function(val) {
        if ((val) === 2.1) {
            return true;
        } else {
            return false;
        };
    };

    return {
        "checkString": checkString,
        "checkEmail": checkEmail,
        "checkTotal": checkTotal,
        "checkNumeric": checkNumeric,
        "checkURL": checkURL,
        "checkDecimal": checkDecimal
    };
};

var newLib = new MyLibrary();

console.log(newLib.checkString("404-555-3366"));
console.log(newLib.checkEmail("123@123.com"));
console.log(newLib.checkTotal([0 + 1 + 2 + 3]));
console.log(newLib.checkNumeric("42"));
console.log(newLib.checkURL("http://www.facebook.com"));
console.log(newLib.checkDecimal(2.10));