// // const myElement = document.querySelectorAll('.classone')
// // console.log(myElement[0]);

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am Being Changed using JS'

const myPElement =document.querySelectorAll('p')
myPElement.forEach((p) => p.textContent = "I am Changed using loop in JS"
) 

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I am added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked' 
    
})

//track input form

document.querySelector('#myform').addEventListener('input', (event)=>{
    console.log(event.target.value);
    
})