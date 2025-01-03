// Hàm tạo độ trễ
// Hàm tạo độ trễ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm hợp nhất (merge) hai mảng đã được sắp xếp
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Ghép phần còn lại của mảng nếu có
    return result.concat(left.slice(i), right.slice(j));
}

// Hàm thực hiện Merge Sort với theo dõi
async function mergeSort(arr) {
    console.log("Mảng ban đầu: " + arr.join(", ")); // Xuất mảng ban đầu

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log(`Chia mảng thành: ${left.join(", ")} và ${right.join(", ")}`);

    // Đệ quy gọi mergeSort cho mảng trái và mảng phải
    const leftSorted = await mergeSort(left);
    const rightSorted = await mergeSort(right);

    // Hợp nhất hai mảng đã sắp xếp
    const merged = merge(leftSorted, rightSorted);

    console.log(`Hợp nhất: ${leftSorted.join(", ")} và ${rightSorted.join(", ")} thành ${merged.join(", ")}`);
    // await delay(10); // Chờ 1 giây giữa các bước hợp nhất

    return merged;
}

// Sử dụng Merge Sort và đo thời gian chạy
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
    const sortedArray = await mergeSort(array); // Chạy thuật toán
    const endTime = performance.now(); // Lấy thời gian kết thúc
    console.log("Mảng sau khi sắp xếp: " + sortedArray.join(", "));
    console.log(`Thời gian thực thi: ${(endTime - startTime) / 1000} giây`);
}

main();
