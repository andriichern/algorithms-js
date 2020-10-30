const ONE = 1;
const ZERO = 0;
let i, j, base, temp;

function areElementsEqual(arr, start, end) {
    areEqual = true;

    // Check whether all array elements from start to end are the same
    for (i = start; i <= end - 1; ++i) {
        if (arr[i + 1] !== arr[i]) {
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
        if (arr[j] >= arr[end]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            ++i;
        }
    }

    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;

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