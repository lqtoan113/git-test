// Khai báo
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;  // Chỉ số đầu hàng đợi
    this.rear = 0;   // Chỉ số cuối hàng đợi
  }

  // Thêm phần tử vào cuối hàng đợi
  enqueue(item) {
    this.items[this.rear] = item;  // Thêm phần tử tại vị trí rear
    this.rear++;  // Tăng chỉ số rear
  }

  // Lấy phần tử ra khỏi đầu hàng đợi
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";  // Nếu hàng đợi rỗng, không thể dequeue
    }
    let item = this.items[this.front];  // Lấy phần tử tại vị trí front
    this.front++;  // Tăng chỉ số front
    return item;
  }

  // Xem phần tử đầu tiên của hàng đợi
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  // Kiểm tra xem hàng đợi có rỗng không
  isEmpty() {
    return this.front === this.rear;  // Nếu front == rear thì hàng đợi rỗng
  }

  // Kiểm tra số lượng phần tử trong hàng đợi
  size() {
    return this.rear - this.front;  // Số phần tử = rear - front
  }

  // In ra tất cả các phần tử trong hàng đợi
  printQueue() {
    console.log(this.items.slice(this.front, this.rear).join(' <- '));
  }
}
  
// Sử dụng
  // Tạo một hàng đợi mới
let queue = new Queue();

// Thêm các phần tử vào hàng đợi
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// In ra hàng đợi
queue.printQueue();  // Output: 10 <- 20 <- 30

// Lấy phần tử đầu tiên ra khỏi hàng đợi
console.log(queue.dequeue());  // Output: 10
queue.printQueue();  // Output: 20 <- 30

// Xem phần tử đầu tiên mà không xóa
console.log(queue.peek());  // Output: 20

// Kiểm tra kích thước của hàng đợi
console.log(queue.size());  // Output: 2

// Kiểm tra nếu hàng đợi rỗng
console.log(queue.isEmpty());  // Output: false

// Lấy phần tử ra cho đến khi hàng đợi rỗng
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());  // Output: true


// xứ lý dữ liệu theo nguyên lí FIFO(first In first Out)

