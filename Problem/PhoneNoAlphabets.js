/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digitsRange = {
        '2' : ['a','b','c'],
        '3' : ['d','e','f'],
        '4' : ['g','h','i'],
        '5' : ['j','k','l'],
        '6' : ['m','n','o'],
        '7' : ['p','q','r','s'],
        '8' : ['t','u','v'],
        '9' : ['w','x','y','z']
    };
   
    if (digits.length === 0) {
        return [];
    }
  
    // Initialize result array with empty string to start building combinations
    const combinations= [''];
  
  
    // Process each digit in the input string
    for (const digit of digits) {
        // Get the corresponding letters for current digit (subtract 2 to align with array index)
        const letters = digitsRange[digit]
      
        // Temporary array to store new combinations for this iteration
        const newCombinations= [];
      
        // For each existing combination, append each possible letter
        for (const existingCombination of combinations) {
            console.log("existing",existingCombination)
            for (const letter of letters) {
                // Create new combination by appending current letter to existing combination
                newCombinations.push(existingCombination + letter);
            }
        }
        console.log(digit,combinations,newCombinations)
        // Replace all elements in combinations array with new combinations
        combinations.splice(0, combinations.length, ...newCombinations);
    }
  
    return combinations;
}

console.log(letterCombinations('23'));
