let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
let sort_str = [];
str.forEach((data) => {
    sort_str.push(data.split("").sort().join(''));
})
let str_set = new Set(sort_str); 
// console.log(str_set);

let str_map = new Map();

str_set.forEach((data) => {
    str_map.set(data, []);
});
// console.log(str_map);

str.forEach((data) => {
    let sort_data = data.split("").sort().join("");
    str_map.get(sort_data).push(data);
});

// console.log(str_map);

let result = Array.from(str_map.values());
console.log(result);