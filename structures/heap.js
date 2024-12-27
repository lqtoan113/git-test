// cây nhị phân hoàn chỉnh 
// max-heap các root luôn lớn hơn hoặc bằng các node con, root luôn lớn nhất
// min-heap các root luôn nhỏ hơn hoặc bằng các node con, root luôn nhỏ nhất
// dùng trong sắp xếp, hàng đợi ưu tiên, tìm kiếm tối ưu
// Khai báo
class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Thêm phần tử vào Heap
    insert(value) {
      this.heap.push(value);  // Thêm phần tử vào cuối mảng
      this._heapifyUp();  // Đảm bảo tính chất của heap
    }
  
    // Lấy phần tử lớn nhất (nút gốc) và loại bỏ nó khỏi heap
    extractMax() {
      if (this.heap.length === 0) return null;
      
      // Lấy phần tử gốc (lớn nhất)
      const max = this.heap[0];
  
      // Đặt phần tử cuối cùng vào gốc
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();  // Loại bỏ phần tử cuối cùng
  
      this._heapifyDown();  // Đảm bảo tính chất của heap
      return max;
    }
  
    // Lấy phần tử lớn nhất mà không loại bỏ nó khỏi heap
    peek() {
      return this.heap[0] || null;
    }
  
    // Đảm bảo tính chất Max-Heap khi chèn phần tử
    _heapifyUp() {
      let index = this.heap.length - 1;
      const value = this.heap[index];
  
      // Di chuyển phần tử lên khi giá trị lớn hơn cha của nó
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] >= value) break;
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      }
  
      // Đặt phần tử vào vị trí đúng
      this.heap[index] = value;
    }
  
    // Đảm bảo tính chất Max-Heap sau khi lấy phần tử gốc
    _heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      const value = this.heap[0];
  
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largest = index;
  
        if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
          largest = leftChildIndex;
        }
  
        if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
          largest = rightChildIndex;
        }
  
        if (largest === index) break;
  
        // Hoán đổi
        this.heap[index] = this.heap[largest];
        this.heap[largest] = value;
        index = largest;
      }
    }
  
    // Kiểm tra xem heap có rỗng không
    isEmpty() {
      return this.heap.length === 0;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Thêm phần tử vào Heap
    insert(value) {
        this.heap.push(value);  // Thêm phần tử vào cuối mảng
        this._heapifyUp();  // Đảm bảo tính chất của heap
    }

    // Lấy phần tử nhỏ nhất (nút gốc) và loại bỏ nó khỏi heap
    extractMin() {
        if (this.heap.length === 0) return null;
        
        // Lấy phần tử gốc (nhỏ nhất)
        const min = this.heap[0];

        // Đặt phần tử cuối cùng vào gốc
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();  // Loại bỏ phần tử cuối cùng

        this._heapifyDown();  // Đảm bảo tính chất của heap
        return min;
    }

    // Lấy phần tử nhỏ nhất mà không loại bỏ nó khỏi heap
    peek() {
        return this.heap[0] || null;
    }

    // Đảm bảo tính chất Min-Heap khi chèn phần tử
    _heapifyUp() {
        let index = this.heap.length - 1;
        const value = this.heap[index];

        // Di chuyển phần tử lên khi giá trị nhỏ hơn cha của nó
        while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] <= value) break;
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
        }

        // Đặt phần tử vào vị trí đúng
        this.heap[index] = value;
    }

    // Đảm bảo tính chất Min-Heap sau khi lấy phần tử gốc
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const value = this.heap[0];

        while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        // Kiểm tra con trái
        if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }

        // Kiểm tra con phải
        if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest === index) break;

        // Hoán đổi
        this.heap[index] = this.heap[smallest];
        this.heap[smallest] = value;
        index = smallest;
        }
    }

    // Kiểm tra xem heap có rỗng không
    isEmpty() {
        return this.heap.length === 0;
    }
}
  




// Sử dụng
let heapMax = new MaxHeap();

// Thêm các phần tử vào heap
heapMax.insert(10);
heapMax.insert(20);
heapMax.insert(15);
heapMax.insert(30);
heapMax.insert(25);

// Lấy phần tử lớn nhất từ heap
console.log(heapMax.extractMax());  // Output: 30

// Kiểm tra phần tử lớn nhất mà không loại bỏ nó
console.log(heapMax.peek());  // Output: 25

// Thêm phần tử mới và kiểm tra lại phần tử lớn nhất
heap.insert(40);
console.log(heapMax.peek());  // Output: 40

// Lấy các phần tử lớn nhất
console.log(heapMax.extractMax());  // Output: 40
console.log(heapMax.extractMax());  // Output: 25
console.log(heapMax.extractMax());  // Output: 20
console.log(heapMax.extractMax());  // Output: 15
console.log(heapMax.extractMax());  // Output: 10



let heapMin = new MinHeap();

// Thêm các phần tử vào heap
heapMin.insert(10);
heapMin.insert(20);
heapMin.insert(15);
heapMin.insert(30);
heapMin.insert(25);

// Lấy phần tử nhỏ nhất từ heap
console.log(heapMin.extractMin());  // Output: 10

// Kiểm tra phần tử nhỏ nhất mà không loại bỏ nó
console.log(heapMin.peek());  // Output: 15

// Thêm phần tử mới và kiểm tra lại phần tử nhỏ nhất
heap.insert(5);
console.log(heapMin.peek());  // Output: 5

// Lấy các phần tử nhỏ nhất
console.log(heapMin.extractMin());  // Output: 5
console.log(heapMin.extractMin());  // Output: 15
console.log(heapMin.extractMin());  // Output: 20
console.log(heapMin.extractMin());  // Output: 25
console.log(heapMin.extractMin());  // Output: 30
