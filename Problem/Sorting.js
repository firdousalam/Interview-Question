function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
const array = [64, 25, 12, 22, 11];
console.log("Original array:", array);
console.log("Sorted array:", selectionSort(array));

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array1 = [64, 34, 25, 12,20, 22, 11, 90];
console.log("Bubble Sorted Array:", bubbleSort(array1));


function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
       let current = arr[i];
       let j = i - 1;
       // Shift elements of the sorted portion to the right
       while (j >= 0 && arr[j] > current) {
           arr[j + 1] = arr[j];
           j--;
       }
       // Insert the current element into its correct position
       arr[j + 1] = current;
   }
   return arr;
}
// Example usage
const array3 = [5, 3, 6, 1, 4];
console.log("Original Array:", array3);
console.log("Sorted Array:", insertionSort(array3));