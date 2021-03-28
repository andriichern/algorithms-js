let i;
let sorted = Array.prototype;
let counts = Array.prototype;

const ONE = 1;
const ZERO = 0;

const sort = (arr, radix) => {
    for (i = ZERO; i < counts.length; ++i) {
        counts[i] = ZERO;
    }

    for (i = ZERO; i < arr.length; ++i) {
        ++counts[arr[i][radix]];
    }

    for (i = ONE; i <= counts.length - ONE; ++i) {
        counts[i] = counts[i] + counts[i - ONE];
    }

    for (i = ZERO; i < arr.length; ++i) {
        sorted[counts[arr[i][radix]] - ONE] = arr[i];
        --counts[arr[i][radix]];
    }
}

const radixSort = (arr, radix, k) => {
    if (!(arr && arr.length && radix)) {
        return Array.prototype;
    }

    sorted = new Array(arr.length);
    counts = new Array(k + ONE);

    for (let radI = radix - ONE; radI >= ZERO; --radI) {
        sort(arr, radI, k);
    }

    return sorted;
};

module.exports = radixSort;