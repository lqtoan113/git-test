// Iterator - Định nghĩa các phương thức để duyệt qua các phần tử
class Iterator {
    hasNext() {
        throw "hasNext method should be implemented!";
    }

    next() {
        throw "next method should be implemented!";
    }
}

// ConcreteIterator - Triển khai các phương thức của Iterator
class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super();
        this.aggregate = aggregate;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.aggregate.getItems().length;
    }

    next() {
        return this.aggregate.getItems()[this.index++];
    }
}

// Aggregate - Định nghĩa phương thức để trả về Iterator
class Aggregate {
    createIterator() {
        throw "createIterator method should be implemented!";
    }
}

// ConcreteAggregate - Triển khai phương thức tạo Iterator
class ConcreteAggregate extends Aggregate {
    constructor() {
        super();
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    createIterator() {
        return new ConcreteIterator(this);
    }
}
// Tạo ConcreteAggregate và thêm các phần tử
const aggregate = new ConcreteAggregate();
aggregate.addItem("Item 1");
aggregate.addItem("Item 2");
aggregate.addItem("Item 3");

// Tạo Iterator để duyệt qua các phần tử
const iterator = aggregate.createIterator();

// Duyệt qua các phần tử trong Aggregate
while (iterator.hasNext()) {
    console.log(iterator.next());
}
// Output:
// Item 1
// Item 2
// Item 3
