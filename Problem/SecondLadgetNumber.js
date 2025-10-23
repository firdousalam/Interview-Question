function secondLargets(data){
    return [... new Set(data)].sort((a,b)=>a-b)[5];

}

console.log(secondLargets([1,1,1,2,7,11,2,3,6,4,8,9]))

function secondLargest(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num < max1) {
            max2 = num;
        }
    }

    return max2 === -Infinity ? null : max2; // return null if no 2nd largest
}
console.log(secondLargest([1, 4, 5, 2, 5, 4])); // 4
console.log(secondLargest([9, 9, 9,1,10])); // null (no distinct second largest)

function secondLargestDistinct(arr) {
    const unique = [...new Set(arr)];
    if (unique.length < 2) return null;

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let num of unique) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max2;
}
