const ONE = 1;
const ZERO = 0;

const countingSort = (arr, k) => {
    if (!(arr && arr.length && k)) {
        return Array.prototype;
    }

    let i;
    const sorted = new Array(arr.length);
    const counts = new Array(k + ONE);
    
    for (i = ZERO; i < counts.length; ++i) {
        counts[i] = ZERO;
    }

    for (i = ZERO; i < arr.length; ++i) {
        ++counts[arr[i]];
    }

    for (i = ONE; i <= k; ++i) {
        counts[i] = counts[i] + counts[i - ONE];
    }

    for (i = ZERO; i < arr.length; ++i) {
        sorted[counts[arr[i]] - ONE] = arr[i];
        --counts[arr[i]]
    }

    return sorted;
};

module.exports = countingSort;