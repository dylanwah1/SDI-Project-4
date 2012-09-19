// Dylan R. Wahlstrom	
// SDI 1209
//Project 4
//Library of functions


var MyLibrary = function() {
//phone number
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
today=new Date()
	var myBirthday=new Date(today.getFullYear(), 11, 25) 
	if (today.getMonth()==11 && today.getDate()>25) 
	myBirthday.setFullYear(myBirthday.getFullYear()+1) 
	var one_day=1000*60*60*24


console.log(Math.ceil((myBirthday.getTime()-today.getTime())/(one_day))+
" days left until birthday!")

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
    
    return {
        "checkString" : checkString,
        "checkEmail"  : checkEmail,
        "checkNumeric": checkNumeric,
        "checkURL"    : checkURL
    };
};

var newLib = new MyLibrary();

console.log(newLib.checkString("404-555-3366"));
console.log(newLib.checkEmail("123@123.com"));
console.log(newLib.checkNumeric(42));
console.log(newLib.checkURL("http://www.facebook.com"));