// const days = ['Monday','Tue','Wednesday','Thursday','Friday','Saturday','Sunday']

// // console.log(days[0]);

// // days.forEach(function(tiger, index)
// // {
// //     console.log(` starts with ${index+1} -- ${tiger}`)
// // }
// // )

// for (let i = days.length-1; i >= 0; i--) {
//     console.log(days[i]);
    
// }

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to Gym')
 

myTodos.forEach(function(todo, index){
    console.log(`Your task no.${index} is: ${todo}` )
})
