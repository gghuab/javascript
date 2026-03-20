function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
        let isSwap = false;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
                isSwap = true;
            }
        }
        if (!isSwap) {
            break;
        }
    }
    return arr;
}
const arr = [1, 23, 24, 5433, 12432, 3242, 1231, 5453];
const arr2 = bubbleSort(arr);
console.log(arr2);
export {};
