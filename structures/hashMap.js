// Khai báo
    //Object
        // Khởi tạo một Object làm HashMap
        let hashMap = {};

        // Thêm các cặp khóa-giá trị
        hashMap['name'] = 'John';
        hashMap['age'] = 30;
        hashMap['city'] = 'New York';

        // Truy cập giá trị qua khóa
        console.log(hashMap['name']);  // Output: John
        console.log(hashMap['age']);   // Output: 30

        // Kiểm tra sự tồn tại của khóa
        console.log('name' in hashMap);  // Output: true
        console.log('country' in hashMap);  // Output: false

        // Xóa một cặp khóa-giá trị
        delete hashMap['age'];
        console.log(hashMap);  // Output: { name: 'John', city: 'New York' }
    // Map
        // Khởi tạo một Map
        let map = new Map();

        // Thêm các cặp khóa-giá trị vào Map
        map.set('name', 'John');
        map.set('age', 30);
        map.set('city', 'New York');

        // Truy cập giá trị qua khóa
        console.log(map.get('name'));  // Output: John
        console.log(map.get('age'));   // Output: 30

        // Kiểm tra sự tồn tại của khóa
        console.log(map.has('name'));  // Output: true
        console.log(map.has('country'));  // Output: false

        // Xóa một cặp khóa-giá trị
        map.delete('age');
        console.log(map);  // Output: Map(2) { 'name' => 'John', 'city' => 'New York' }

        // Lặp qua các cặp khóa-giá trị
        map.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        });
        // Output:
        // name: John
        // city: New York

        // Xóa tất cả các cặp khóa-giá trị
        map.clear();
        console.log(map);  // Output: Map(0) {}


// Sử dụng



// dùng để luư 1 cặp giá trị (key: value)