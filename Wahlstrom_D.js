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

today=new Date()
var myBirthday=new Date(today.getFullYear(), 11, 25) 
if (today.getMonth()==11 && today.getDate()>25) 
myBirthday.setFullYear(myBirthday.getFullYear()+1) 
var one_day=1000*60*60*24


console.log(Math.ceil((myBirthday.getTime()-today.getTime())/(one_day))+
" days left until birthday!")


    
    
    return {
        "checkString": checkString,
        "checkEmail" : checkEmail
    };
};

var newLib = new MyLibrary();

console.log(newLib.checkString("404-555-3366"));
console.log(newLib.checkEmail("123@123.com"));