const student ={
    name: 'danish',
    age:13,
    isActive: true
}

//this object into a string to be stored in local storage
const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString);

//localStorage.setItem('student',studentObjToString)

const toJsonStudent = JSON.parse(studentObjToString)
console.log(toJsonStudent.age);
 