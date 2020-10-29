const ONE = 1;
const ZERO = 0;
let i, j, base, temp;

function part(arr, start, end) {
    let isEquall = true;

    for (j = start; j <= end - 1; ++j) {
        if (arr[j + 1] !== arr[j]) {
            isEquall = false;
            break;
        }
    }

    if (isEquall) {
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