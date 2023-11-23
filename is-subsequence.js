// add whatever parameters you deem necessary
const isSubsequence = (str1, str2) => {

   str1Idx = 0; 
   str2Idx = 0; 

   while(str1Idx < str2.length){
    if(str1[str1Idx] === str2[str2Idx]){
        str1Idx++;
    } 

    if(str1Idx === str1.length){ return true};
    str2Idx ++;
   }

   return false;
}


// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)