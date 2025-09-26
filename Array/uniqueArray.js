function UniqueArray(arr){
    return [...new Set(arr)];
}
console.log(UniqueArray([1,2,3,3,4,5,5,6]))