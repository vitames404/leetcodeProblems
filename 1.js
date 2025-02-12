var twoSum = function(nums, target) {
    let firstIndex = 0;
    let secondIndex = nums.length - 1;
    let copyNums = nums.slice();

    // Create a map to store indices
    let indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!indexMap.has(nums[i])) {
            indexMap.set(nums[i], []);
        }
        indexMap.get(nums[i]).push(i);
    }

    // Sort the copied array
    copyNums.sort((a, b) => a - b);

    let answerArray = [];

    while (firstIndex < secondIndex) {
        let sum = copyNums[firstIndex] + copyNums[secondIndex];

        if (sum === target) {
            answerArray = [copyNums[firstIndex], copyNums[secondIndex]];
            break;
        } else if (sum > target) {
            secondIndex--;
        } else {
            firstIndex++;
        }
    }

    // If no solution was found, return an empty array
    if (answerArray.length === 0) return [];

    // Retrieve original indices
    let result = [indexMap.get(answerArray[0]).shift(), indexMap.get(answerArray[1]).shift()];
    
    return result;
};
