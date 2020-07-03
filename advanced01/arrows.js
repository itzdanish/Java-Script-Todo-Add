// const sayHello = function (name) {
//     return `hey ${name}, Whatsup`
// }

// console.log(sayHello('Sammy'));

const sayHello = (name) => `hey ${name}, Whatsup`


//console.log(sayHello('Sammy'));

const todos =[{
    title: 'Buy Bread',
    isDone: true,
},{
    title:'Go to Gym',
    isDone: true,
},{
    title:'Record youtube Video',
    isDone: false
}]

const thingsDone = todos.filter((todo) => todo.isDone == true
)

//console.log(thingsDone);

const cameras ={
    price: 600,
    weight: 2000,
    myDec: function() {
        return `This canaon camera is ${this.price}`
    } 
    
}

console.log(cameras.myDec());
