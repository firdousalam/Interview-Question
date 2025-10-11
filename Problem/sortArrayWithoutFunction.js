
// function sortFun(data){
//     let sortedArray = [];
//   for(let i=0;i<data.length;i++){ //20 ,6
//     sortedArray[i] = data[i];  // [5,6
//     let newValue = data[i];
//      for(let j=0;j<=i;j++){  // 5
//         if(sortedArray[j]>newValue){
//            let oldData = sortedArray[j]; 
//         //     sortedArray[j] = data[i];
//              sortedArray[i] = oldData;
//             sortedArray[j] = newValue;
       


//         //     sortedArray[i] =  sortedArray[j];
//           //  sortedArray[j] =  data[i];
//         }
        
//      }
//   }
//   console.log(sortedArray);
//   return sortedArray[1];
// }

function bubbleSort(arr){
  let n = arr.length;
  for (let i=0; i<n-1; i++){  
    for (let j=0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
}
  }
 return arr;
}

let array = [5,6,10,11,20,20,11,9,5]
console.log("sorted Array ", bubbleSort(array));
//5,6,10,11,20,20,11,9,5
// console.log(sortFun([5,6,10,11,20,20,11,9,5]));