const ONE = 1;
const TWO = 2;
const ZERO = 0;
let temp, maxIndex, leftIndex, rightIndex;

const parent = index => (index / TWO) | ZERO;

const right = index => (TWO * index) + ONE;

const left = index => TWO * index;

const heapifyDesc = (arr, i, size) => {
    leftIndex = left(i);
    rightIndex = right(i);

    maxIndex = (leftIndex <= size && arr[leftIndex] > arr[i]) ? leftIndex : i;
    (rightIndex <= size && arr[rightIndex] > arr[maxIndex]) && (maxIndex = rightIndex);

    if (maxIndex !== i) {
        temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;

        heapifyDesc(arr, maxIndex, size);
    }
};

const priorityQueue = {
    arr: [],
    length: ZERO,

    init(data) {
        this.arr = data.slice(ZERO);
        this.length = data.length;
        
        const start = ((data.length - ONE) / TWO) | ZERO;
    
        for (let i = start; i >= ZERO; --i) {
            heapifyDesc(this.arr, i, this.length);
        }
    },

    max() {
        this.arr[ZERO]
    },

    pop() {
        if (!this.length) {
            throw new Error('Queue is empty');
        }
    
        const max = this.arr[ZERO];
        this.length = this.length - ONE;
        this.arr[ZERO] = this.arr[this.length];
        this.arr.splice(this.length, ONE);
        
        heapifyDesc(this.arr, ZERO, this.length - ONE);

        return max;
    },

    setValue(index, value) {
        if (this.arr[index] && value < this.arr[index]) {
            throw new Error('New value is lower than current');
        }

        while (index > ZERO && this.arr[parent(index)] < value) {
            this.arr[index] = this.arr[parent(index)];
            index = parent(index);
        }

        this.arr[index] = value;
    },

    insert(value) {
        this.setValue(this.length, value);
        this.length = this.length + ONE;
    }
};

module.exports = priorityQueue;