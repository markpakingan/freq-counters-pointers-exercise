function averagePair(nums, target) {

    let left = 0; 
    let right = nums.length - 1;

    if (!nums) return false;

    while(left < right){
        
        const average = (nums[left] + nums[right])/2;
        console.log("average", average);
        if(average === target ) {
            console.log (nums[left], nums[right])
            return true;
        } else if (average  > target) {
            right --;
        } else {
            left ++
        }
    }

    return false;
}


// Time Complexity: O(N)


averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false