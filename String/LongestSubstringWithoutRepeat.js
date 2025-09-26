function longestSubstring(str) {

  let set = new Set();
  
  let left = 0, max = 0;
  
  for (let right = 0; right < str.length; right++) {
  
    while (set.has(str[right])) {
    
      set.delete(str[left++]);
      
    }
    
    set.add(str[right]);
    
    max = Math.max(max, right - left + 1);
    
  }
  
  return max;
}
console.log(longestSubstring("abcabcbb")); // 3
