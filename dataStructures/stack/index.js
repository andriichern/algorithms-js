function Stack(n) {
    let top = -1;
    let values = new Array(n);

    this.isEmpty = function() {
        return top === -1;
    };
    this.push = function(item) {
        if (top === values.length - 1) {
            console.log('Overflow!');
            return;
        }

        ++top;
        values[top] = item
    };
    this.pop = function() {
        if (this.isEmpty()) {
            return null;
        }

        --top;
        return values[top + 1];
    };
};

module.exports = Stack;