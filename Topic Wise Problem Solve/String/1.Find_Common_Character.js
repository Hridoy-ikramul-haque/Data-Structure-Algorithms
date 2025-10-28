// var commonCharacter = function (words) {
//     let base = words[0].split("");

//     for (let i = 1; i < words.length; i++) {
//         let current = words[i].split("");
//         let temp = [];
//         for (let x of base) {
//             if (current.indexOf(x) !== -1) {
//                 temp.push(x);
//                 current.splice(current.indexOf(x), 1);
//             }
//             // console.log(temp);
//         }
//         base = temp;

//     }
//     return base;
// }




// another approce 
let commonCharacter = function (words) {
    if (words.length === 0) return [];

    // frequency of every character
    const base_freq = {};
    for (const ch of words[0]) {
        base_freq[ch] = (base_freq[ch] || 0) + 1;
    }

    //for other words frequency
    for (let i = 1; i < words.length; i++)
    {
        const curr = words[i];
        const curr_freq = {};
        for (const ch of curr) {
            curr_freq[ch] = (curr_freq[ch] || 0) + 1;
        }

        //traverse and update min freq
        for (const ch in base_freq)
        {
            // console.log(ch);
            if (curr_freq[ch]) {
                base_freq[ch] = Math.min(base_freq[ch], curr_freq[ch]);
            }
            else {
                delete base_freq[ch];
            }
        }
    }
    // return base_freq;
    const result = [];
    for (const ch in base_freq)
    {
        for (let i = 0; i < base_freq[ch]; i++)
        {
            result.push(ch);
        }
    }

    return result;
}


const result = commonCharacter(["cool", "lock", "cook"]);
console.log(result);