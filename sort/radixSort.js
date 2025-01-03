// Hàm tạo độ trễ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm Radix Sort
async function radixSort(arr) {
    // Tìm giá trị lớn nhất trong mảng để xác định số chữ số tối đa
    const max = Math.max(...arr);
    let exp = 1; // Bắt đầu từ chữ số ít quan trọng nhất (LSD)

    // Sắp xếp theo từng chữ số
    while (Math.floor(max / exp) > 0) {
        await countingSortByDigit(arr, exp);
        exp *= 10;
    }
}

// Hàm Counting Sort theo từng chữ số
async function countingSortByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Đếm số lượng các phần tử có chữ số tại vị trí 'exp'
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Cộng dồn số lượng để xác định vị trí của phần tử trong output
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Đặt các phần tử vào đúng vị trí trong output
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Sao chép các phần tử từ output về mảng gốc
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    console.log(`Sắp xếp theo chữ số ở vị trí ${exp}: ${arr.join(", ")}`);
    await delay(50); // Đợi 50ms để quan sát quá trình sắp xếp
}

// --- Chạy thử và đo thời gian ---
async function runRadixSort() {
    let array = Array.from({ length: 2000 }, () => Math.floor(Math.random() * 10000));

    // Gọi hàm Radix Sort và theo dõi quá trình
    let start = performance.now();
    await radixSort(array);
    let end = performance.now();
    
    console.log(`Radix Sort time: ${(end - start) / 1000} giây`);
}

runRadixSort();
