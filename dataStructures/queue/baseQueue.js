function Queue(n) {
    let head = 0;
    let tail = 0;
    const values = new Array(n);

    this.enqueue = function(item) {
        values[tail] = item;

        if (tail === values.length - 1) {
            tail = 0;
        } else {
            ++tail;
        }
    };

    this.dequeue = function () {
        const value = values[head];

        if (head === values.length - 1) {
            head = 1;
        } else {
            ++head;
        }

        return value;
    };
};

module.exports = Queue;