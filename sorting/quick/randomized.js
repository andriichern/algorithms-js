const ONE = 1;
const ZERO = 0;
let i, j, mid, base, temp;

function getRandomIndex(start, end) {
    start = Math.ceil(start);
    
    return Math.floor(Math.random() * (Math.floor(end) - start + ONE)) + start;
}

function areElementsEqual(arr, start, end) {
    // Check whether all array elements from start to end are the same
    for (i = start; i <= mid; ++i) {
        if (arr[i] !== arr[end - i]) {
            return false;
        }
    }

    return true;
}

function part(arr, start, end) {
    // If array elements from start to end are the same 
    // then return their half position index
    mid = ((start + end) / 2) | 0;

    if (areElementsEqual(arr, start, end)) {
        return mid;
    }

    i = getRandomIndex(start, end);
    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;

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