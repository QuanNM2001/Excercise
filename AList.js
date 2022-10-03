function arrayToList(array) {
    let result = {};
    if (Array.isArray(array)) {
        let listItem = result;
        for (let item = 0; item < array.length; item += 1) {
            let newListItem = {
                value: array[item],
                rest: null
            };
            if (typeof listItem.rest === 'undefined') {
                result = newListItem;
            } else {
                listItem.rest = newListItem;
            }
            listItem = newListItem;
        }
    }
    return result;
}
console.log(arrayToList([10, 20, 30, 40, 50]));