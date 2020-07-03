var john ={
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry ={
    name: 'I am Marry',
    age: 23,
    isActive: true
}

var sam ={
    name: 'I am Sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john',john)
users.set('marry',marry)
users.set('Sam',sam)

// console.log(users.size);
// console.log(users.get('marry'));
// console.log(users.values());

// for (const value of users.values()) {
//     console.log(value.name);
    
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + ' = ' + value.name);
    
// }

users.forEach((value,key) =>  console.log(key + ' = ' + value.name))

var arrpfArr = [['One', '1'], ['Two','2'], ['Three','3']]

var newMap = new Map(arrpfArr)

console.log(newMap);
