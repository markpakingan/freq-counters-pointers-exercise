// add whatever parameters you deem necessary
const separatePositive = (arr) => {

    const result = [];

    for (let int of arr){
        if(int > 0 ){
            result.push(int);
        }
    }

    for (let int of arr){
        if(int < 0){
            result.push(int);
        }
    }

    console.log(result);

}
separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]

