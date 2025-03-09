/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // Replace the special characters and the lower / uppercase difference;
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Create a counter for second and first number
    let scndNumber = s.length - 1;
    let firstNumber = 0;
    
    // While the first number is not bigger than the second
    while(firstNumber < scndNumber){
        
        // Check if they are not different
        if(s[firstNumber]!= s[scndNumber]){
            return false;
        }
        
        // Go to the next letter
        firstNumber += 1;
        scndNumber -= 1;
        
    }
    
    return true;
    
};