// Product - Đối tượng sẽ được tạo ra
class Computer {
    constructor(cpu, ram, storage, graphicsCard) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.graphicsCard = graphicsCard;
    }

    displayConfig() {
        return `CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, Graphics Card: ${this.graphicsCard}`;
    }
}

// Builder - Lớp cơ sở chứa các phương thức tạo ra các thành phần của đối tượng
class ComputerBuilder {
    setCPU(cpu) {
        throw "setCPU method should be implemented!";
    }
    setRAM(ram) {
        throw "setRAM method should be implemented!";
    }
    setStorage(storage) {
        throw "setStorage method should be implemented!";
    }
    setGraphicsCard(graphicsCard) {
        throw "setGraphicsCard method should be implemented!";
    }
    build() {
        throw "build method should be implemented!";
    }
}
// ConcreteBuilder - Lớp triển khai thực tế các phương thức tạo ra các thành phần
class GamingComputerBuilder extends ComputerBuilder {
    constructor() {
        super();
        this.computer = new Computer();
    }

    setCPU(cpu) {
        this.computer.cpu = cpu;
    }

    setRAM(ram) {
        this.computer.ram = ram;
    }

    setStorage(storage) {
        this.computer.storage = storage;
    }

    setGraphicsCard(graphicsCard) {
        this.computer.graphicsCard = graphicsCard;
    }

    build() {
        return this.computer;
    }
}
// Director - Điều khiển quá trình xây dựng đối tượng
class ComputerDirector {
    constructor(builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.setCPU('Intel i9');
        this.builder.setRAM('32GB');
        this.builder.setStorage('1TB SSD');
        this.builder.setGraphicsCard('NVIDIA RTX 3090');
    }
}
// Client - Tạo đối tượng thông qua Builder và Director
const builder = new GamingComputerBuilder();
const director = new ComputerDirector(builder);

// Xây dựng máy tính
director.construct();
const gamingPC = builder.build();

console.log(gamingPC.displayConfig());
// Output: CPU: Intel i9, RAM: 32GB, Storage: 1TB SSD, Graphics Card: NVIDIA RTX 3090
