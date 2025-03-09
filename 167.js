/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    // Define the two pointers
    let firstPointer = 0;
    let secondPointer = numbers.length - 1;


    // While the firstPointer is higher than the secondPointer
    while(firstPointer < secondPointer){

        // Implement logic to move the pointers in the array
        if(numbers[firstPointer] + numbers[secondPointer] < target){
            firstPointer++;
        }
        else if(numbers[firstPointer] + numbers[secondPointer] > target){
            secondPointer--;
        }
        // If the indexes are equal to the target then return an array with both indexes + 1
        else{
            return [firstPointer + 1, secondPointer + 1];
        }

    }

    // return false if there's no case.
    return false;

};

