class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance; // Trả về instance đã tồn tại
        }
        this.data = 'This is some data';
        Singleton.instance = this; // Lưu instance vào Singleton
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}
const instance1 = new Singleton();
console.log(instance1.getData()); // Output: This is some data

instance1.setData("Updated data");

const instance2 = new Singleton();
console.log(instance2.getData()); // Output: Updated data (instance1 và instance2 là cùng một đối tượng)

console.log(instance1 === instance2); // Output: true (Chúng đều là một thể hiện duy nhất)
