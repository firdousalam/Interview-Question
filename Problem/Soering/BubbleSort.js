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
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
           //     swapped = true;
            }
        }
    }
}
var arr = [ 64, 34, 25, 12, 12,22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log(arr);