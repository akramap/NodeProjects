// function
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

const obj = {name:'Pasha'};

class test {
    constructor(arr){
        this.array = arr;
    }

    averageFun(){
        let sum = 0;
        this.array.forEach(element => {
            sum += element;
        });
        return sum/this.array.length;
    }
    
}


// 1 way
// module.exports = {
//     average,
//     name:'Akram',
//     obj,
//     test
// }

exports.average = average;
exports.name = 'Akram';
exports.obj = obj;
exports.test = test;


// 2nd way
// module.exports.name='2nd way';
/* any object, class,function can be added directly */
// module.exports = 'Akram';
/* only be added as a property */
// exports.test = test;