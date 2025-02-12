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

    // Sort both the arrays
    // In this case I need to convert the strings in arrays of chars.
    s = Array.from(s).sort().join('');
    t = Array.from(t).sort().join('');

    // Compare them
    if(s == t){
        return true;
    }

    return false;

};