// Hàm tạo độ trễ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm Quick Sort có chi tiết
async function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Chọn pivot (dùng phần tử cuối làm pivot)
        const pivotIndex = await partition(arr, low, high);
        
        // Sau khi phân tách xong, đệ quy sắp xếp các phần tử bên trái và phải của pivot
        console.log(`Phân tách mảng tại index ${pivotIndex} với pivot ${arr[pivotIndex]}`);
        
        // Sắp xếp phần tử bên trái
        await quickSort(arr, low, pivotIndex - 1);
        
        // Sắp xếp phần tử bên phải
        await quickSort(arr, pivotIndex + 1, high);
    }
}

// Hàm phân tách (partition) mảng tại một chỉ số pivot
async function partition(arr, low, high) {
    const pivot = arr[high]; // Chọn pivot là phần tử cuối cùng
    let i = low - 1; // Đặt chỉ số i vào trước phần tử đầu tiên

    // Duyệt qua mảng và phân tách các phần tử nhỏ hơn pivot vào phía bên trái
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Hoán đổi arr[i] và arr[j]
            console.log(`Hoán đổi: ${arr.join(", ")}`);
            await delay(50); // Đợi 50ms để quan sát quá trình hoán đổi
        }
    }

    // Đặt pivot vào đúng vị trí của nó
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.log(`Hoán đổi pivot: ${arr.join(", ")}`);
    await delay(50); // Đợi 50ms để quan sát quá trình hoán đổi
    
    return i + 1; // Trả về chỉ số của pivot
}

// --- Chạy thử với mảng ngẫu nhiên ---
async function runQuickSort() {
    let array = Array.from({ length: 2000 }, () => Math.floor(Math.random() * 10000));

    // Gọi hàm Quick Sort và theo dõi quá trình
    let start = performance.now();
    await quickSort(array, 0, array.length - 1);
    let end = performance.now();
    
    console.log(`Quick Sort time: ${(end - start) / 1000} giây`);
}

runQuickSort();

