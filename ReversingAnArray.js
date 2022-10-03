function reverseArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
        result.unshift(array[i]);
    }
    return result;
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
function reverseArrayInPlace() {
    let reverse = [];

}
function reverseArrayInPlace(array) {
    for (let i = 0; i < math.floor(array.length/ 2); i++) {
        let swap = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = swap;
    }
    return array;
}
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]