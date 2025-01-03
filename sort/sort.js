// Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

// Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) arr[j + 1] = arr[j--];
        arr[j + 1] = key;
    }
}

// Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i), right.slice(j));
}

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1], left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Radix Sort
function radixSort(arr) {
    const max = Math.max(...arr);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

function countingSortByDigit(arr, exp) {
    const output = [], count = Array(10).fill(0);
    for (let i = 0; i < arr.length; i++) count[Math.floor(arr[i] / exp) % 10]++;
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
}

// So sánh các thuật toán sắp xếp
function compareSorts() {
    let array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 10000));

    // Merge Sort
    let mergeArray = [...array];
    let start = performance.now();
    mergeArray = mergeSort(mergeArray);
    let end = performance.now();
    console.log("Merge Sort time: " + (end - start) / 1000 + " seconds");

    // Quick Sort
    let quickArray = [...array];
    start = performance.now();
    quickArray = quickSort(quickArray);
    end = performance.now();
    console.log("Quick Sort time: " + (end - start) / 1000 + " seconds");

    // Radix Sort
    let radixArray = [...array];
    start = performance.now();
    radixSort(radixArray);
    end = performance.now();
    console.log("Radix Sort time: " + (end - start) / 1000 + " seconds");

    // Insertion Sort
    let insertionArray = [...array];
    start = performance.now();
    insertionSort(insertionArray);
    end = performance.now();
    console.log("Insertion Sort time: " + (end - start) / 1000 + " seconds");

    // Selection Sort
    let selectionArray = [...array];
    start = performance.now();
    selectionSort(selectionArray);
    end = performance.now();
    console.log("Selection Sort time: " + (end - start) / 1000 + " seconds");

    // Bubble Sort
    let bubbleArray = [...array];
    start = performance.now();
    bubbleSort(bubbleArray);
    end = performance.now();
    console.log("Bubble Sort time: " + (end - start) / 1000 + " seconds");
}

// Gọi hàm để so sánh các thuật toán sắp xếp
compareSorts();
