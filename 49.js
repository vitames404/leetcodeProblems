/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map();

    // Iterate through each word in the input array.
    for (let str of strs) {
        // Sort the characters of the current word to create a key.
        let currentString = str.split('').sort().join('');

        // If the sorted key doesn't exist in the map, initialize it with an empty array.
        if (!map[currentString]) {
            map[currentString] = [];
        }

        // Add the original word to the array corresponding to the sorted key.
        map[currentString].push(str);
    }
    
    // Return the values of the map (the grouped anagrams) as a list of lists.
    return Object.values(map);

};