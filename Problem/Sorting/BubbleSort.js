// of Bubble sort
function bubbleSort(arr, n){
    let i, j, temp;
     if (arr.length <= 1) {
       return arr;
   }
   // var swapped;
    for (i = 0; i < n - 1; i++){
      //  swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
           //     swapped = true;
            }
        }
    }
}

// bubble sort optimize way

// of Bubble sort
function bubbleSortSwap(arr, n){
    let i, j, temp;
     if (arr.length <= 1) {
       return arr;
   }
 
    for (i = 0; i < n - 1; i++){
      let swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] < arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    console.log("swapped",arr)
}

var arr = [ 64, 34, 25, 12, 12,22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log(arr);
var arr1 = [ 6, 34, 25, 12, 14,22, 11, 90 ];
bubbleSortSwap(arr1, n);
console.log(arr1);

/*
            time complexity 
Best Case	     Already sorted array → only 1 pass, loop breaks early	O(n)
Average Case	 Random order	                                        O(n²)
Worst Case	     Reverse sorted	                                        O(n²)

Space Complexity

O(1) → Bubble Sort is an in-place sorting algorithm (it doesn’t need extra memory, only a few variables for swapping).
*/