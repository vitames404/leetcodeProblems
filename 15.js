/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize pointers and the result array
    let firstPointer = 0;
    let secondPointer = firstPointer + 1;
    let thirdPointer = nums.length - 1;
    let returnArray = [];

    // If the array has exactly 3 elements, check if they sum to 0
    if (nums.length == 3) {
        if (nums[0] + nums[1] + nums[2] == 0) {
            returnArray.push([nums[0], nums[1], nums[2]]);
            return returnArray;
        }
        return [];
    }

    // Outer loop to fix the first element of the triplet
    for (let firstPointer = 0; firstPointer < nums.length - 2; firstPointer++) {

        // Skip duplicate values for the first element to avoid duplicate triplets
        if (firstPointer > 0 && nums[firstPointer] === nums[firstPointer - 1]) {
            continue;
        }

        // Initialize the second and third pointers
        secondPointer = firstPointer + 1;
        thirdPointer = nums.length - 1;

        // Inner loop to find pairs that sum to the target (0 - nums[firstPointer])
        while (secondPointer < thirdPointer) {
            
            // Calculate the sum of the current triplet
            const sum = nums[firstPointer] + nums[secondPointer] + nums[thirdPointer];

            // If the sum is greater than 0, move the third pointer left to reduce the sum
            if (sum > 0) {
                thirdPointer--;
            }
            // If the sum is less than 0, move the second pointer right to increase the sum
            else if (sum < 0) {
                secondPointer++;
            }
            // If the sum is 0, we found a valid triplet
            else {
                // Add the triplet to the result array
                returnArray.push([nums[firstPointer], nums[secondPointer], nums[thirdPointer]]);

                // Skip duplicate values for the second pointer
                while (secondPointer < thirdPointer && nums[secondPointer] === nums[secondPointer + 1]) {
                    secondPointer++;
                }
                // Skip duplicate values for the third pointer
                while (secondPointer < thirdPointer && nums[thirdPointer] === nums[thirdPointer - 1]) {
                    thirdPointer--;
                }

                // Move both pointers inward to search for the next triplet
                secondPointer++;
                thirdPointer--;
            }
        }
    }

    // Return the array of unique triplets
    return returnArray;
};