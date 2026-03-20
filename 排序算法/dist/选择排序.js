import ISorted from './utils.js';
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let miniIndex = i; //选择第I个元素当做最小元素
        for (let j = i + 1; j < arr.length; j++) {
            //从第I加1个元素往后比较，找比第I个元素小的元素重新赋值
            if (arr[j] < arr[miniIndex]) {
                miniIndex = j;
            }
        }
        //如果选择的第i个元素就是最小，则不用交换
        if (i !== miniIndex) {
            let temp = arr[i];
            arr[i] = arr[miniIndex];
            arr[miniIndex] = temp;
        }
    }
    return arr;
}
console.log(ISorted(selectionSort));
