/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If the length is not the same return false, they can't be anagrams
    if(s.length != t.length){
        return false;
    }

    // Make a dictionary of times the char will appear
    frequencyMap = {};

    // For the first string add one to everytime the char appeared
    for(const char of s){
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // For the second string reduce one from the char dictionary
    for(const char of t){
        if(!frequencyMap[char]){
            return false;
        }
        frequencyMap[char]--;
    }

    // Check if they're all 0 at the end, if yes they are anagrams.
    return Object.values(frequencyMap).every(value => value === 0);

};