// Product (Interface)
class Animal {
    speak() {
        throw new Error("This method should be overridden!");
    }
}

// ConcreteProduct: Dog
class Dog extends Animal {
    speak() {
        return "Woof! Woof!";
    }
}

// ConcreteProduct: Cat
class Cat extends Animal {
    speak() {
        return "Meow! Meow!";
    }
}

// ConcreteProduct: Bird
class Bird extends Animal {
    speak() {
        return "Tweet! Tweet!";
    }
}

// Factory: AnimalFactory
class AnimalFactory {
    static createAnimal(type) {
        switch (type) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            case "bird":
                return new Bird();
            default:
                throw new Error("Animal type not supported.");
        }
    }
}

// Sử dụng Factory
const animal1 = AnimalFactory.createAnimal("dog");
console.log(animal1.speak()); // Output: Woof! Woof!

const animal2 = AnimalFactory.createAnimal("cat");
console.log(animal2.speak()); // Output: Meow! Meow!

const animal3 = AnimalFactory.createAnimal("bird");
console.log(animal3.speak()); // Output: Tweet! Tweet!
// Biến thể
// Abstract Products
class Chair {
    sitOn() { }
}
class Table {
    placeItems() { }
}

// Concrete Product: Modern Chair
class ModernChair extends Chair {
    sitOn() {
        return "Sitting on a modern chair.";
    }
}

// Concrete Product: Modern Table
class ModernTable extends Table {
    placeItems() {
        return "Placing items on a modern table.";
    }
}

// Concrete Product: Victorian Chair
class VictorianChair extends Chair {
    sitOn() {
        return "Sitting on a Victorian chair.";
    }
}

// Concrete Product: Victorian Table
class VictorianTable extends Table {
    placeItems() {
        return "Placing items on a Victorian table.";
    }
}

// Abstract Factory
class FurnitureFactory {
    createChair() { }
    createTable() { }
}

// Concrete Factory: Modern Furniture
class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    createTable() {
        return new ModernTable();
    }
}

// Concrete Factory: Victorian Furniture
class VictorianFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createTable() {
        return new VictorianTable();
    }
}

// Sử dụng Abstract Factory
const modernFactory = new ModernFurnitureFactory();
const modernChair = modernFactory.createChair();
const modernTable = modernFactory.createTable();

console.log(modernChair.sitOn()); // Output: Sitting on a modern chair.
console.log(modernTable.placeItems()); // Output: Placing items on a modern table.

const victorianFactory = new VictorianFurnitureFactory();
const victorianChair = victorianFactory.createChair();
const victorianTable = victorianFactory.createTable();

console.log(victorianChair.sitOn()); // Output: Sitting on a Victorian chair.
console.log(victorianTable.placeItems()); // Output: Placing items on a Victorian table.
