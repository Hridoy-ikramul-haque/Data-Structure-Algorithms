//https://leetcode.com/problems/first-unique-character-in-a-string/description/

let s = "leetcode"
let unique = s.split(""); 
let result = unique.filter((data) => {
    return unique.indexOf(data) === unique.lastIndexOf(data);
});

console.log(result);