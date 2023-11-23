// add whatever parameters you deem necessary
const objectCounter = (int) => {

    let object = {}; 

    let newInt = JSON.stringify(int);

     for(let key of newInt){
         object[key] = (object[key]+1) || 1;
     }
    return object;
 }


const sameFrequency = (int1, int2) => {

let objectInt1 = JSON.stringify(objectCounter(int1));
let objectInt2 = JSON.stringify(objectCounter(int2));

console.log(objectInt1, objectInt2);

 return objectInt1 === objectInt2;

 
}


sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false