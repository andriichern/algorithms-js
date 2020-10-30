const ONE = 1;
const TWO = 2;
const ZERO = 0;
let i, j, base, temp;

function getMedianIndex(arr, start, end) {
    let min = ZERO, max = ZERO;

    min = getRandomIndex(start, end);

    for (i = ONE; i <= TWO; ++i) {
        temp = getRandomIndex(start, end);

        if (i === TWO) {
            if (arr[temp] > arr[min] && arr[temp] < arr[max]) {
                return temp;
            }
            if (arr[temp] < arr[min]) {
                return min;
            }
            return max;
        } else if (arr[temp] < arr[min]) {
            min = temp;
        } else if (arr[temp] > arr[max]) {
            max = temp;
        }
    }
}

function getRandomIndex(start, end) {
    start = Math.ceil(start);
    
    return Math.floor(Math.random() * (Math.floor(end) - start + ONE)) + start;
}

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

    i = (end - start) >= 3 ? getMedianIndex(arr, start, end) : getRandomIndex(start, end);
    // i = getRandomIndex(start, end);
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