let getMyGrade = function (currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercent>=90) {
    myGrade ='A'     
    }else if (myPercent>=80) {
        myGrade='B'
    }else if (myPercent>=70) {
        myGrade='C'
    }else if (myPercent>=60) {
        myGrade='D'
    }else if (myPercent>=35) {
        myGrade='E'
    }else {
        myGrade='F'
    }

    return `Your Grade is ${myGrade} and Your percent is ${myPercent}`   
}

let yourResult = getMyGrade(34, 100)
console.log(yourResult);
