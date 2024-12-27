//Khai báo
class Node {
    constructor(data) {
      this.data = data;  // Dữ liệu của nút
      this.left = null;   // Con trái
      this.right = null;  // Con phải
    }
}
class BinaryTree {
    constructor() {
      this.root = null;  // Cây bắt đầu với nút gốc là null
    }
  
    // Thêm một nút mới vào cây
    insert(data) {
      const newNode = new Node(data);
  
      // Nếu cây rỗng, gán nút mới làm gốc
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);  // Gọi phương thức phụ để thêm nút
      }
    }
  
    // Hàm phụ để thêm nút vào cây nhị phân
    _insertNode(node, newNode) {
      // Nếu giá trị nhỏ hơn nút hiện tại, đi sang bên trái
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;  // Gán nút mới vào con trái
        } else {
          this._insertNode(node.left, newNode);  // Đệ quy để đi xuống phía trái
        }
      } else {
        // Nếu giá trị lớn hơn hoặc bằng nút hiện tại, đi sang bên phải
        if (node.right === null) {
          node.right = newNode;  // Gán nút mới vào con phải
        } else {
          this._insertNode(node.right, newNode);  // Đệ quy để đi xuống phía phải
        }
      }
    }
  
    // Duyệt cây theo thứ tự tiền thứ tự (Pre-order)
    preOrder(node) {
      if (node !== null) {
        console.log(node.data);  // In ra dữ liệu nút
        this.preOrder(node.left);  // Duyệt con trái
        this.preOrder(node.right);  // Duyệt con phải
      }
    }
  
    // Duyệt cây theo thứ tự giữa thứ tự (In-order)
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);  // Duyệt con trái
        console.log(node.data);  // In ra dữ liệu nút
        this.inOrder(node.right);  // Duyệt con phải
      }
    }
  
    // Duyệt cây theo thứ tự hậu thứ tự (Post-order)
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);  // Duyệt con trái
        this.postOrder(node.right);  // Duyệt con phải
        console.log(node.data);  // In ra dữ liệu nút
      }
    }
  
    // Duyệt cây theo cấp (Level-order) sử dụng hàng đợi
    levelOrder() {
      if (this.root === null) return;
  
      let queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        let node = queue.shift();  // Lấy nút đầu tiên trong hàng đợi
        console.log(node.data);  // In ra dữ liệu nút
  
        if (node.left !== null) {
          queue.push(node.left);  // Thêm con trái vào hàng đợi
        }
  
        if (node.right !== null) {
          queue.push(node.right);  // Thêm con phải vào hàng đợi
        }
      }
    }
  
    // Tìm kiếm một giá trị trong cây
    search(node, data) {
      if (node === null) return false;
  
      if (data < node.data) {
        return this.search(node.left, data);  // Tìm kiếm bên trái
      } else if (data > node.data) {
        return this.search(node.right, data);  // Tìm kiếm bên phải
      } else {
        return true;  // Tìm thấy phần tử
      }
    }
  
    // Tính chiều cao của cây
    height(node) {
      if (node === null) {
        return 0;
      }
      let leftHeight = this.height(node.left);  // Chiều cao cây con trái
      let rightHeight = this.height(node.right);  // Chiều cao cây con phải
  
      return Math.max(leftHeight, rightHeight) + 1;  // Chiều cao của cây là chiều cao lớn nhất của con trái và con phải + 1
    }
}
//Sử dụng
let tree = new BinaryTree();

// Thêm các phần tử vào cây
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

// Duyệt cây theo các thứ tự khác nhau
console.log("Pre-order traversal:");
tree.preOrder(tree.root);  // Output: 50, 30, 20, 40, 70, 60, 80

console.log("In-order traversal:");
tree.inOrder(tree.root);  // Output: 20, 30, 40, 50, 60, 70, 80

console.log("Post-order traversal:");
tree.postOrder(tree.root);  // Output: 20, 40, 30, 60, 80, 70, 50

console.log("Level-order traversal:");
tree.levelOrder();  // Output: 50, 30, 70, 20, 40, 60, 80

// Tìm kiếm một giá trị trong cây
console.log(tree.search(tree.root, 60));  // Output: true
console.log(tree.search(tree.root, 100)); // Output: false

// Tính chiều cao của cây
console.log("Height of the tree:", tree.height(tree.root));  // Output: 3
