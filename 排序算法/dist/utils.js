function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
export default function ISorted(sortfc) {
    const arr = Array.from({ length: 10 }, () => {
        return Math.floor(Math.random() * 200);
    });
    console.log(arr);
    const arr1 = sortfc(arr);
    console.log(arr1);
    return isSorted(arr1);
}
