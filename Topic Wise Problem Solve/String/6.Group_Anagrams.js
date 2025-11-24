const groupAnagrams = function (strs) {
    let org_str = strs;
    let sort_str = [];
    let result = [];
    const anagrams = new Map(); 
    strs.forEach(element => { //eat
        let srt = element.split('').sort().join(''); //aet
        if (!anagrams.has(srt))
        {
            anagrams.set(srt,[]);
        }
        anagrams.get(srt).push(element);
    });
    // return anagrams;
    return Array.from(anagrams.values());
}

let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);