function quickSort(arr) {
   if (arr.length <= 1) {
       return arr;
   }
   let pivot = arr[0];
   let left = [];
   let right = [];
   for (let i = 1; i < arr.length; i++) {
       if (arr[i] < pivot) {
           left.push(arr[i]);
       } else {
           right.push(arr[i]);
       }
   }
   return [...quickSort(left), pivot, ...quickSort(right)];
}
let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(quickSort(myArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*

Let’s analyze its time and space complexity step-by-step:

⚙️ Quick Sort Algorithm (Divide & Conquer)

Your function:

Picks a pivot (arr[0])

Divides the rest of the array into two subarrays:

left → elements less than pivot

right → elements greater than or equal to pivot

Recursively sorts both sides, then merges the result.

🕒 Time Complexity
Case	Description	Complexity
Best Case	Pivot divides the array into two equal halves every time	O(n log n)
Average Case	Random pivot division (balanced splits overall)	O(n log n)
Worst Case	Pivot is always smallest or largest element (unbalanced splits)	O(n²)
📘 Explanation

Each recursive level does O(n) work (partitioning).

The recursion depth depends on how balanced the splits are:

Balanced: log n levels → O(n log n) total.

Unbalanced: n levels → O(n²) total.

💡 Worst case happens when the array is already sorted and the first element is chosen as the pivot.

💾 Space Complexity
Type	Complexity	Reason
Auxiliary Space (for recursion)	O(log n) average, O(n) worst	Due to recursive call stack depth
Total Space (with extra arrays)	O(n)	Because you create new left and right arrays at every step

*/

/* quick sort better approach

Here’s how we can improve it:

✅ 1. Use In-place Partitioning

No need to create new arrays — just swap elements inside the original array.

✅ 2. Use Random Pivot or Median Pivot

This avoids the worst-case O(n²) by ensuring more balanced partitions.

✅ 3. Reduce Array Copy Operations

Avoid using spread operators (...) repeatedly in recursion.

*/

// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (low < high) {
//     // Randomized pivot selection
//     let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
//     [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

//     // Partition array around pivot
//     let pi = partition(arr, low, high);

//     // Recursive sort
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
//   return arr;
// }

// function partition(arr, low, high) {
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // swap smaller element
//     }
//   }

//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // place pivot in correct position
//   return i + 1;
// }

// Example:
let myArrayNew = [3, 7, 2, 5, 1, 4, 6, 8];
console.log("Optimized:", quickSortOp(myArrayNew,0,myArrayNew.length-1));

function quickSortOp(arr,low=0,high=arr.length-1){
    console.log(low,high);
    if(high>low){
        // 
        let pivot = Math.floor(Math.random()* (high - low + 1))+low
        console.log(pivot,"pivot",Math.random()* (high - low + 1));
        [arr[pivot], arr[high]] = [arr[high], arr[pivot]];
        // do partition array around pivot
        let pi = partition(arr,low,high);
        quickSortOp(arr,low,pi-1);
        quickSortOp(arr,pi+1,high);
    }
    return arr;
}
function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // place pivot in correct position
    return i+1;
}