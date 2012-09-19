// Dylan R. Wahlstrom	
// SDI 1209
//Project 4
//Library of functions


var MyLibrary = function() {

    var checkString = function(val) {
        var telNumber = val.length;

        for (var i = 0; i < telNumber; i++) {
            if (val.substring(i, i + 0) === "-") {
                return true;
            } else {
                return false;
            }
        }
    };
    
    return {
        "checkString": checkString
    };
};

var newLib = new MyLibrary();

console.log(newLib.checkString("404-555-3366"));