const mod = require('./mod');

const array=[3,4,5];
const str = mod.name;

const average = mod.average([3,4,5]);
const objectVar = mod.obj;
const testClassObj = new mod.test(array);
console.log(`${average}
${str}
${objectVar}
class - ${testClassObj.averageFun()}`);