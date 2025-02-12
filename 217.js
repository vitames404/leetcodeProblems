/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // Make a set to store the seen numbers
    let seenNumbers = new Set();

    // For each element check if it is in the array, if it's not add
    // if the element shows up again will return true.
    for(const num of nums){
        if(seenNumbers.has(num)){
            return true;
        }
        else{
            seenNumbers.add(num);
        }
    }

    // If the for ends return false, nothing repeated.
    return false;

};