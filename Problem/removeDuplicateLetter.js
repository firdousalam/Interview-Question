function uniqueLetter(word){
  let unique = {};
  for(let i=0;i<word.length;i++){
    if(!unique[word[i]]){
        unique[word[i]] = true;
    }
  }
  let letter = '';
  for(let key in unique){
    letter+=key
  }

  return letter;
}

console.log(uniqueLetter('banana'));

function secondMax(arr){
    if(arr.length<=1) return null;
    let sortedData = arr.sort((a,b)=> b-a);
    return sortedData[1];

}

console.log(secondMax([2,4,1,7,3]));

function secondLarger(nums){
     if (nums.length < 2) return null;

    let first = -Infinity;
    let second = -Infinity;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>first){
            second = first;
            first=nums[i]
        }else{
            if(nums[i]>second && nums[i]<first){
                second = nums[i];
            }
        }
    }
    return second === -Infinity ? null : second;

}
console.log(secondLarger([5, 1, 8, 2]))