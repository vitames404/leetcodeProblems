/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        
    let firstPointer = 0;
    let secondPointer  = height.length - 1;

    let maxArea = 0;

    while(firstPointer < secondPointer){

        // Calculate the current area
        let firstNumber = height[firstPointer];
        let secondNumber = height[secondPointer];
        let bestNumber = Math.min(firstNumber, secondNumber);
        let currentArea = bestNumber * (secondPointer - firstPointer);

        // Update maxArea if the current area is greater
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line
        if (firstNumber < secondNumber) {
            firstPointer++;
        } else {
            secondPointer--;
        }
    }

    return maxArea;
};