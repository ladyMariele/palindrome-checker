function palindrome(str) {
    // console.log(str)
    let backwardSpelling = [1,2];
    let forwardSpelling = [1,2];
    
    // grab last letter of `str` then push to `backwardSpelling`
    // for (let i = str.length - 1; i >= 0; i--) {
    //     backwardSpelling.push(str[i]) 
    // }
    //     console.log(backwardSpelling);
    
    // grab first letter of `str` then push to `forwardSpelling`
    // for (let i = 0; i <= str.length - 1 ; i++) {
    //     forwardSpelling.push(str[i])
    // }
    //     console.log(forwardSpelling);
    
    
    function areEqual(arr1, arr2) {
        // check array values by loop, compare to each other
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
            return true
        }
    }

}


// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,    ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)    and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

palindrome("eye")