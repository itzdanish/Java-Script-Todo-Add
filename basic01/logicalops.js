
let isVerified = true
let isLoggedIn = true
let hasPaymentDone = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentDone) {
    console.log('Greeting mesage to user')
    console.log('Grant Access to paid course')
} else if (isVerified || isGuest){
    console.log("Allow Free Previews")
}else{
    console.log('MESSAGE: Please Contact Admin')
}