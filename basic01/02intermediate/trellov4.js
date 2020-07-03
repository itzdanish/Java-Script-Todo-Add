const myTodos = ['Buy Bread','Go to Gym', 'Record Youtube Videos']
//console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title: 'Buy bread',
    isDone: false,
}, {
    title:'Go to Gym',
    isDone: false,
}, {
    title:'Record Youtube Videos',
    isDone: true,
}]


// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === 'Go to Gym'
// })

// console.log(index);

//Method 1
// const findTodos = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodos(newTodos, 'Go to gym')
// console.log(printMe);

//Method2
const findTodos = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodos(newTodos, 'Go to gym')
console.log(printMe);
