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
//time between date
function printElapsedTime (fTest) {
    var nStartTime = Date.now(), vReturn = fTest(), nEndTime = Date.now();
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
    return vReturn;
}



// number 42
var checkNumeric = function(val) {
	
	if(isNaN(val)){
		return false;
	} else {
		return true;
	};
	
};

//check url
var checkURL = function(val){
	var first = val.substring(0,val.indexOf(":"));
	if((first === "http") || (first === "https")){
		return true;
	} else {
		return false;
	};
};  
// check decimal
var checkDecimal = function(val){
	if((val) === 2.1){
		return true;
	} else {
		return false;
	};
};
    
    return {
        "checkString" : checkString,
        "checkEmail"  : checkEmail,
        "checkDate"   :	checkDate,
        "checkNumeric": checkNumeric,
        "checkURL"    : checkURL,
        "checkDecimal": checkDecimal
    };
};

var newLib = new MyLibrary();

console.log(newLib.checkString("404-555-3366"));
console.log(newLib.checkEmail("123@123.com"));
console.log(newLib.checkDate("12/25/1987"));
console.log(newLib.checkNumeric(42));
console.log(newLib.checkURL("http://www.facebook.com"));
console.log(newLib.checkDecimal(2.10));