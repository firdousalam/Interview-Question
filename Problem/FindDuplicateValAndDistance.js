function DuplicateAndDistance(arr){
    let Duplicate = {}
    for(let i=0;i<arr.length;i++){
        console.log(arr.indexOf(arr[i]))
        if(i != arr.lastIndexOf(arr[i])){
            Duplicate[arr[i]] = arr.lastIndexOf(arr[i]) - i;
        }
    }
  return Duplicate;
}
console.log(DuplicateAndDistance([1,2,3,4,5,2,7]));

function reverseArray(arr) {
    let left = 0;
    let right = arr.length-1;
    while(right>left){
        [arr[left],arr[right]] =  [arr[right],arr[left]]; //swap
        /*let temp = arr[left];
arr[left] = arr[right];
arr[right] = temp
*/
        right--;
        left++;

    }
    return arr;

}

let arr = [1, 2, 3, 4, 5];
console.log("rev",reverseArray(arr));