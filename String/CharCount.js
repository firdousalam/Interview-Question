function charCount(str) {

  let map = {};
  
  for (let char of str) {
  
    map[char] = (map[char] || 0) + 1;
    
  }
  
  return map;
  
}
console.log(charCount("hello")); // {h:1, e:1, l:2, o:1}