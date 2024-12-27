// Khai báo

class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;  // Khởi tạo đầu danh sách là null
  }

  // Thêm phần tử vào đầu danh sách
  appendToHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Thêm phần tử vào cuối danh sách
  appendToTail(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;  // Nếu danh sách rỗng, phần tử mới là đầu danh sách
      return;
    }
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;  // Duyệt tới nút cuối cùng
    }
    lastNode.next = newNode;  // Gắn nút mới vào cuối
  }

  // Xóa phần tử đầu tiên có giá trị nhất định
  delete(data) {
    if (this.head === null) {
      return;  // Danh sách rỗng, không có gì để xóa
    }

    // Nếu phần tử đầu tiên cần xóa
    if (this.head.data === data) {
      this.head = this.head.next;  // Đổi con trỏ đầu danh sách
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;  // Bỏ qua phần tử cần xóa
        return;
      }
      current = current.next;
    }
  }

  // Duyệt qua danh sách và in các phần tử
  printList() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.data + ' -> ';
      current = current.next;
    }
    output += 'null';
    console.log(output);
  }

  // Tìm kiếm phần tử trong danh sách
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;  // Tìm thấy phần tử
      }
      current = current.next;
    }
    return false;  // Không tìm thấy phần tử
  }
}
  

// Sử dụng
// Tạo danh sách liên kết
let ll = new LinkedList();

// Thêm các phần tử vào đầu và cuối danh sách
ll.appendToHead(1);      // Danh sách: 1 -> null
ll.appendToTail(2);      // Danh sách: 1 -> 2 -> null
ll.appendToTail(3);      // Danh sách: 1 -> 2 -> 3 -> null
ll.appendToTail(4);      // Danh sách: 1 -> 2 -> 3 -> 4 -> null

// In ra danh sách liên kết
ll.printList();  // In ra: 1 -> 2 -> 3 -> 4 -> null

// Tìm kiếm phần tử trong danh sách
console.log(ll.search(3));  // In ra: true (3 có trong danh sách)
console.log(ll.search(5));  // In ra: false (5 không có trong danh sách)

// Xóa phần tử có giá trị 3
ll.delete(3);   // Danh sách: 1 -> 2 -> 4 -> null
ll.printList();  // In ra: 1 -> 2 -> 4 -> null

// Xóa phần tử đầu tiên (có giá trị 1)
ll.delete(1);   // Danh sách: 2 -> 4 -> null
ll.printList();  // In ra: 2 -> 4 -> null


// kích thước linh hoạt, mỗi phần tử là 1 node(nút)
// truy cập tuần tự bắt đầu từ đầu danh sách
// ko hỗ trợ truy cập ngẫu nhiên
// sử dụng khi cần lưu trữ dữ liệu với kích thước ko xác định 
// cấu trúc dữ liệu Queue và Stack có thể được khai báo bằng linked list
// linh hoạt khi thao tác với các phần tử đàu hoặc cuối danh sách
// cần khai báo thêm con trỏ
