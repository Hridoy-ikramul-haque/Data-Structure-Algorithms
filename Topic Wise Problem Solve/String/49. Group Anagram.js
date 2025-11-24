// https://leetcode.com/problems/group-anagrams/description/








var groupAnagrams = function (str) {
    const groups = new Map();
    for (let s of str) {
        const freq = new Array(26).fill(0);

        // traverse each character of each element of an array
        for (let ch of s) {
            const index = ch.charCodeAt(0) - 97;//a-0 b-1 c-2
            freq[index]++;
        }

        const key = freq.join('#');
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(s);
    }
    return Array.from(groups.values());
    
};

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(str));