// add whatever parameters you deem necessary
function constructNote(str1, str2) {


    // checks the count per char
    const newCounter = (str) => {
        let counter = {};
        for (let char of str){
            counter[char] = counter[char] + 1 || 1;
        }
    return counter;
}

    let countedStr1 = newCounter(str1);
    let countedStr2 = newCounter(str2);

    for(let char of countedStr1){
        if(! (char in countedStr2)){
            return false
        }

        if(countedStr1[key] !== countedStr2[key]){
            return false;
        }
    }

    return true;
};

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true