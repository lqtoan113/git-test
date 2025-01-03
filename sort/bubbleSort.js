// Hàm tạo độ trễ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm thực hiện Bubble Sort với theo dõi
async function bubbleSort(arr) {
    console.log("Mảng ban đầu: " + arr.join(", ")); // Xuất mảng ban đầu

    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        console.log(`Vòng lặp ngoài ${i + 1}:`);
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Hoán đổi hai phần tử
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(`Hoán đổi: ${arr[j]} ↔ ${arr[j + 1]}`);
                // console.log(`Hoán đổi: ${arr[j]} ↔ ${arr[j + 1]} | Mảng hiện tại: ${arr.join(", ")}`);
                // await delay(10); // Chờ 0.5 giây
            }
        }
    }
    console.log("Mảng sau khi sắp xếp: " + arr.join(", "));
}

// Sử dụng Bubble Sort và đo thời gian chạy
async function main() {

    let array = [64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59,
        64, 34, 25, 12, 22, 11, 90, 56, 76, 85, 23, 56, 17, 88, 45, 
        67, 100, 31, 49, 72, 39, 40, 10, 18, 99, 71, 36, 28, 15, 19, 33, 57, 
        84, 92, 13, 8, 50, 63, 51, 60, 62, 7, 68, 3, 27, 42, 29, 20, 75, 59];

    const startTime = performance.now(); // Lấy thời gian bắt đầu
    await bubbleSort(array); // Chạy thuật toán
    const endTime = performance.now(); // Lấy thời gian kết thúc
    console.log(`Thời gian thực thi: ${(endTime - startTime) / 1000} giây`);
}

main();

