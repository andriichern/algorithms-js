const ONE = 1;
const ZERO = 0;
let i, j, base, temp, areEqual;

function areElementsEqual(arr, start, end) {
    areEqual = true;

    j = ((start + end) / 2) | 0;

    // Check whether all array elements from start to end are the same
    for (i = start; i <= j; ++i) {
        if (arr[i] !== arr[end - i]) {
            areEqual = false;
            break;
        }
    }

    return areEqual;
}

function part(arr, start, end) {
    // If array elements from start to end are the same 
    // then return their half position index
    if (areElementsEqual(arr, start, end)) {
        return ((start + end) / 2) | 0;
    }

    i = start;

    for (j = start; j < end; ++j) {
        if (arr[j] <= arr[end]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            ++i;
        }
    }

    if (i !== end) {
        temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
    }

    return i;
}

function sort(arr, start = ZERO, end = arr.length - ONE) {
    if (start < end) {
        base = part(arr, start, end);
        sort(arr, start, base - ONE);
        sort(arr, base + ONE, end);
    }
}

module.exports = sort;