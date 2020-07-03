const converToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    }else{
        throw Error('Amount need to be in number')
    }
}

    try {
        const myValue = converToRs('Five')

console.log(myValue);

    } catch (error) {
        console.log(error);
        console.log('I will not run if progarm crashes');
        
    }


