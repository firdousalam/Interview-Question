// Javascript program for insertion sort 

// Function to sort array using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr
}


// Driver method
let arr = [12, 11, 13, 5, 6];

console.log(insertionSort(arr));

function insertSortPrac(arr){
    for(let i=1;i<arr.length;i++){
        let ins = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>ins){
            arr[j+1] = arr[j];
            j--;
        }
        console.log(i,j)
        arr[j+1] = ins;
        console.log(arr);
    }

    return arr;
}
let arrNew = [12, 11, 13, 5, 6];
console.log("new insert",insertSortPrac(arrNew));
