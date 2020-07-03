class User{
    constructor(firstname,lastname,credit){
        this.firstname= firstname;
        this.lastname= lastname;
        this.credits= credit;

    }

    getFullName(){
        let fullname =`${this.firstname} ${this.lastname} is my fullname`;
        return fullname;
    }

    editName(newname){
        const myname = newname.split(' ')
        this.firstname= myname[0]
        this.lastname= myname[1]
    }
}

class Teacher extends User {
    constructor(firstname,lastname,credit,subject){
        super(firstname,lastname,credit)
        this.subject = subject;
    }
    getFullName(){
            let fullname =`${this.firstname} ${this.lastname} is my fullname and i teach ${this.subject}`;
            return fullname;
    }

    favdrink(name){
        console.log(`my fav drink is ${name}`);
        
        
    }
}


const john = new  Teacher('Danish','Khan',45,'python');
//console.log(john);
console.log(john.getFullName());
john.editName('Vivian aka Divine')
console.log(john.getFullName());
john.favdrink('Mirinda')
// const sammy = new User();
// console.log(sammy);
