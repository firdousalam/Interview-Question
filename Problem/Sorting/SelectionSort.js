// Function to swap values
function swap(arr,xp,yp){
    [arr[xp],arr[yp]] = [ arr[yp],arr[xp]]
}

// Function to implement selection
function selectionSort(arr){
    let n = arr.length;
    
    // Variable to store index of smallest value
    let min;
    let i , j;
  
    for( i = 0; i < n-1;++i){
        min = i;
        for(j = i+1; j < n; j++){
            if(arr[j]<arr[min]) min = j;
        }
        if(min!=i){

                [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
}

// Input array
const arr = [64, 25, 12, 22, 11];

// Display input array
console.log( "Original array: "+ arr)

// Sort array using custom selection sort function
selectionSort(arr);

// Display output
console.log("After sorting: " +arr);

function selectionSortPrac(arr){
    for(let i=0;i<arr.length-1;i++){
        let min =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j])  min =j;
        }
        if(min != i) [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr;
}
const arrPrac = [7,64,25,12,22,11];

console.log("sort",selectionSortPrac(arrPrac))