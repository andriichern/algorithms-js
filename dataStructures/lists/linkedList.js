function LinkedList() {
    let head;

    this.items = () => head;

    this.searh = value => {
        let currentItem = head;

        while (currentItem && currentItem.value !== value) {
            currentItem = currentItem.next;
        }

        return currentItem;
    };

    this.insert = value => {
        const listItem = {
            next: head,
            value,
        };

        head && (head.prev = listItem);

        head = listItem;
    };

    this.delete = item => {
        if (item.prev) {
            item.prev.next = item.next;
        } else {
            head = item.next;
        }

        item.next && (item.next.prev = item.prev);
    };
};

module.exports = LinkedList;