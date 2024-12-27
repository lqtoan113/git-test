class TrieNode {
    constructor() {
        this.children = {};  // Chứa các con của nút hiện tại
        this.isEndOfWord = false;  // Đánh dấu nếu đây là kết thúc của một từ
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();  // Gốc của Trie
    }

    // Thêm một từ vào Trie
    insert(word) {
        let node = this.root;

        // Duyệt qua từng ký tự trong từ
        for (let char of word) {
            // Nếu ký tự chưa tồn tại trong children, tạo mới nó
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];  // Di chuyển đến nút con tương ứng
        }
        
        // Đánh dấu kết thúc của từ
        node.isEndOfWord = true;
    }

    // Tìm kiếm một từ trong Trie
    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return false;  // Nếu ký tự không tồn tại, trả về false
            }
            node = node.children[char];
        }

        // Nếu duyệt hết các ký tự và đến một nút là kết thúc của từ
        return node.isEndOfWord;
    }

    // Kiểm tra xem có từ nào bắt đầu với tiền tố cho trước
    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return false;  // Nếu ký tự không tồn tại, trả về false
            }
            node = node.children[char];
        }

        return true;  // Nếu tất cả các ký tự trong tiền tố tồn tại
    }
}
// Sử dụng  
let trie = new Trie();

// Thêm một số từ vào Trie
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");

// Tìm kiếm từ "apple" trong Trie
console.log(trie.search("apple"));  // Output: true

// Tìm kiếm từ "app" trong Trie
console.log(trie.search("app"));    // Output: true

// Tìm kiếm từ "bat" trong Trie
console.log(trie.search("bat"));    // Output: true

// Tìm kiếm từ "batman" trong Trie
console.log(trie.search("batman")); // Output: false

// Kiểm tra tiền tố "app"
console.log(trie.startsWith("app"));  // Output: true

// Kiểm tra tiền tố "ba"
console.log(trie.startsWith("ba"));   // Output: true

// Kiểm tra tiền tố "bats"
console.log(trie.startsWith("bats")); // Output: false
