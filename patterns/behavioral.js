//Observer Pattern
// Subject (Chủ thể)
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this));
    }
}

// Observer (Quan sát viên)
class Observer {
    update(subject) {
        console.log("Observer updated with subject state:", subject.getState());
    }
}

// ConcreteSubject (Chủ thể cụ thể)
class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.state = 0;
    }

    setState(state) {
        this.state = state;
        this.notify();
    }

    getState() {
        return this.state;
    }
}

// Client usage
const subject = new ConcreteSubject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(1);  // Output: Observer updated with subject state: 1
subject.setState(2);  // Output: Observer updated with subject state: 2



//Strategy Pattern
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

class AddStrategy {
    execute(a, b) {
        return a + b;
    }
}

class SubtractStrategy {
    execute(a, b) {
        return a - b;
    }
}

// Client usage
const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3));  // Output: 8

context.setStrategy(new SubtractStrategy());
console.log(context.executeStrategy(5, 3));  // Output: 2



//Command Pattern
class Command {
    execute() {
        throw "execute method should be implemented!";
    }
}

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class Light {
    turnOn() {
        console.log("The light is ON");
    }

    turnOff() {
        console.log("The light is OFF");
    }
}

// Client usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);

lightOnCommand.execute();  // Output: The light is ON
