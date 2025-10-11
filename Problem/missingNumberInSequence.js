function missingSequence(arr){

// sorted it in assending order so that existing data be in sequesnce
let sortedArray = arr.sort((a,b)=> a-b);
let startData = sortedArray[0];
 for(let i= 0 ; i<sortedArray.length;i++){
    let nextData = startData+i;
    if(sortedArray[i] != nextData) return nextData;
 }
}
console.log(missingSequence([7,2,4,3,6]));