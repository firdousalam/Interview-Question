function secondLargest(arr){
    let maxData = 0;
    let secondMax = 0;
    if(arr.length <=1) return null;
    for (let i=0;i<arr;i++){
        if(arr[i]>maxData){
            secondMax = maxData;
            maxData = arr[i];
            
        }else if(arr[i]>secondMax && arr[i]<secondMax){
            secondMax = arr[i]
        }
    }
  return secondMax

}

O(n)
O(1)

console.log(secondLargest([2,3,6,5,78,9,-88])); // 9