// Hàm tạo độ trễ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm thực hiện Selection Sort với theo dõi
async function selectionSort(arr) {
    console.log("Mảng ban đầu: " + arr.join(", ")); // Xuất mảng ban đầu

    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Tìm chỉ số của phần tử nhỏ nhất trong mảng chưa sắp xếp
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Hoán đổi nếu phần tử nhỏ nhất không phải là phần tử hiện tại
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.log(`Hoán đổi: ${arr[minIndex]} ↔ ${arr[i]}`);
            // console.log(`Hoán đổi: ${arr[minIndex]} ↔ ${arr[i]} | Mảng hiện tại: ${arr.join(", ")}`);
            // await delay(10); // Chờ 0.5 giây
        }
    }

    console.log("Mảng sau khi sắp xếp: " + arr.join(", "));
}

// Sử dụng Selection Sort và đo thời gian chạy
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
    await selectionSort(array); // Chạy thuật toán
    const endTime = performance.now(); // Lấy thời gian kết thúc
    console.log(`Thời gian thực thi: ${(endTime - startTime) / 1000} giây`);
}

main();
