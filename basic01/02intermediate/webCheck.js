let userEmail='danish123nkn'
let password = '1234'


let userChecker = function (myString) {
    if (myString.includes(123) && (myString.length>6) ) {
        return true
    }else{
        return false
    }
}

let passChecker= function (pass) {
    if (pass.includes(123) && (pass.length>8)) {
        return true
    }
    return false
}

console.log(passChecker(password));
