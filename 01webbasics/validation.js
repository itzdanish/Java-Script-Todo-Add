function myValidation() {
    let myValue = document.getElementById('myform').value
    
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("this is not a valid");
        
    }else{
        console.log('this is cool');
        
    }
    
}

//form validation

document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    
    event.target.username.value = ''
    event.target.realname.value = ''
})

