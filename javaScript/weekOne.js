//inputing coding challenge

/*
1) Write two functions:

- One to retrieve all unique substrings that start and end with a vowel.
- One to retrieve all unique substrings that start and end with a consonant.
The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

Examples:
getVowelSubstrings("apple")
--> ["a", "apple", "e"]

getVowelSubstrings("hmm") --> []

getConsonantSubstrings("aviation")
--> ["n", "t", "tion", "v", "viat", "viation"]

getConsonantSubstrings("motor")
-->["m", "mot", "motor", "r", "t", "tor"]

Notes:
- Remember the output array should have unique values.
- The word itself counts as a potential substring.
- Exclude the empty string when outputting the array.
*/
// var string = 'apple'
function getVowelSubString(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let list = [];
    let arr = [];
    if (!string == vowels) {
        return [];
    }
    for (let i = 0; i < string.length; i++) {
        //console.log(string)
        if (vowels.includes(string[i])) {
            list.push(i);
            console.log(i)
        }
    }
    for (let i = 0; i < list.length; i++) {

        if (!(arr.includes(string[list[i]]))) {
            arr.push(string[list[i]]);
            console.log(arr)
        }
        for (let j = i + 1; j < list.length; j++) {
            if (!arr.includes(string.substring(list[i], list[j] + 1))) {
                arr.push(string.substring(list[i], list[j]+ 1))
            }
        }

    }
    return arr.sort();
    
}

console.log(getVowelSubString("apple"));
console.log(getVowelSubString("hmmm"));





function getConstSubString(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let list = [];
    let arr = [];
    if (string.includes(vowels)) {
        return [];
    }
    for (let i = 0; i < string.length; i++) {
        //console.log(string)
        if (!vowels.includes(string[i])) {
            list.push(i);
            console.log(i)
        }
    }
    for (let i = 0; i < list.length; i++) {

        if ((arr.includes(string[list[i]]))) {
            arr.push(string[list[i]]);
            console.log(arr)
        }
        for (let j = i + 1; j < list.length; j++) {
            if (!arr.includes(string.substring(list[i], list[j] + 1))) {
                arr.push(string.substring(list[i], list[j]+ 1))
            }
        }

    }
    return arr.sort();
    
}

console.log(getConstSubString("apple"));
console.log(getConstSubString("hmmm"));
/**
 2) Write a function redundant that takes in a string 'str' and returns a function that returns 'str'.

Examples
const f1 = redundant("apple")
f1() --> "apple"

const f2 = redundant("pear")
f2() --> "pear"

const f3 = redundant("")
f3() -->""

Notes:
Your function should return a 'function', not a string.
 */