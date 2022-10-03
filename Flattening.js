let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((arr, item) => [...arr, ...item], []);
console.log(newArray);




let arrays1 = [[1, 2, 3, [[1, 2, 3], [4, 5, [[1, 2, 3], [4, 5], [6]]], [6]]], [4, 5], [6]];
function flatten(arrays1) {
    return arrays1.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
console.log(flatten(arrays1));