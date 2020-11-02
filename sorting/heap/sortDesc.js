const ONE = 1;
const TWO = 2;
const ZERO = 0;
let max, temp, heapSize, leftIndex, rightIndex;

const right = index => (TWO * index) + ONE;

const left = index => TWO * index;

const heapifyAsc = (arr, i) => {
    leftIndex = left(i);
    rightIndex = right(i);

    max = (leftIndex <= heapSize && arr[leftIndex] < arr[i]) ? leftIndex : i;
    (rightIndex <= heapSize && arr[rightIndex] < arr[max]) && (max = rightIndex);

    if (max !== i) {
        temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;

        heapifyAsc(arr, max);
    }
};

const sort = arr => {
    heapSize = arr.length - ONE;
    const start = ((arr.length - ONE) / TWO) | ZERO;
    
    for (let i = start; i >= ZERO; --i) {
        heapifyAsc(arr, i);
    }

    for (let i = arr.length - ONE; i >= ONE; --i) {
        temp = arr[ZERO];
        arr[ZERO] = arr[i];
        arr[i] = temp;

        --heapSize;
        heapifyAsc(arr, ZERO);
    }
};

module.exports = sort;