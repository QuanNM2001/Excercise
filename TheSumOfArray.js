function range(start, end, step = 1) {
    var array = [];

    if (step < 0) {
        if (start > end) {
            for (var i = start; i >= end; i += step) {
                array.push(i);
            }
        }
        else {
            return "can't log reverse array";
        }

    }
    else {
        if (start < end) {
            for (var i = start; i <= end; i += step) {
                array.push(i);
            }
        }
        else {
            return NaN;
        }
    }
    return array;
}
function sum(numbers) {
    if (numbers) {
        result = 0;
        for (i = 0; i < numbers.length; i += 1) {
            result += numbers[i];
        }
    }
    else {
        return "Can't sum NaN";
    }
    return result;

}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(10, 1, -2));
console.log(range(1, 10, -2));
console.log(range(10, 10, -2));
console.log(sum(range(1, 10)));
