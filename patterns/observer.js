// Observer - Đối tượng nhận thông báo khi Subject thay đổi
class Observer {
    update(subject) {
        throw "update method should be implemented!";
    }
}

// ConcreteObserver - Cập nhật khi Subject thay đổi
class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(subject) {
        console.log(`${this.name} đã nhận thông báo: Giá trị mới của Subject là: ${subject.getState()}`);
    }
}

// Subject - Đối tượng thông báo khi có sự thay đổi
class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    // Đăng ký Observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Hủy đăng ký Observer
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    // Thông báo tất cả Observer khi có thay đổi
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }

    // Cập nhật trạng thái và thông báo
    setState(state) {
        this.state = state;
        this.notifyObservers();
    }

    getState() {
        return this.state;
    }
}
// Tạo Subject và Observer
const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

// Đăng ký Observer
subject.addObserver(observer1);
subject.addObserver(observer2);

// Thay đổi trạng thái của Subject
subject.setState("Trạng thái 1");
// Output:
// Observer 1 đã nhận thông báo: Giá trị mới của Subject là: Trạng thái 1
// Observer 2 đã nhận thông báo: Giá trị mới của Subject là: Trạng thái 1

// Thay đổi trạng thái của Subject một lần nữa
subject.setState("Trạng thái 2");
// Output:
// Observer 1 đã nhận thông báo: Giá trị mới của Subject là: Trạng thái 2
// Observer 2 đã nhận thông báo: Giá trị mới của Subject là: Trạng thái 2
