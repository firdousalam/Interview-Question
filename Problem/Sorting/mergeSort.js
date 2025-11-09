function mergeSort(array) {
    // Base case: If the array has 1 or no elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left or right array
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
/*

⚙️ Step 1: How Merge Sort Works

Merge Sort uses a Divide and Conquer strategy:

Divide: Split the array into two halves.

Conquer: Recursively sort the two halves.

Combine: Merge the sorted halves.

At every recursion level:

We divide the array into two equal parts.

We merge them back in sorted order.

🧠 Step 2: Example Visualization

Let’s take the array:
[38, 27, 43, 3, 9, 82, 10]

Recursion Tree
Level 0:             [38,27,43,3,9,82,10]   →  n elements
                      /                    \
Level 1:     [38,27,43]                  [3,9,82,10]    →  n/2 + n/2
               /       \                   /       \
Level 2:  [38] [27,43]               [3,9]       [82,10]  →  n/4 + n/4 + ...
             \      /                   \           /
Level 3:   [27,38,43]                  [3,9,10,82] → merging results


📉 Each level splits arrays in half
📈 Each level merges all elements once

⏱ Step 3: Time Complexity Derivation

Let 
𝑇
(
𝑛
)
T(n) be the time to sort an array of size 
𝑛
n.

We perform:

Two recursive calls on halves → 
2
𝑇
(
𝑛
/
2
)
2T(n/2)

One merge operation → 
𝑂
(
𝑛
)
O(n)

So:

𝑇
(
𝑛
)
=
2
𝑇
(
𝑛
/
2
)
+
𝑂
(
𝑛
)
T(n)=2T(n/2)+O(n)
Using the Master Theorem:

𝑎
=
2
a=2 → 2 subproblems

𝑏
=
2
b=2 → each subproblem is half size

𝑓
(
𝑛
)
=
𝑂
(
𝑛
)
f(n)=O(n)

Then:

𝑇
(
𝑛
)
=
𝑂
(
𝑛
log
⁡
𝑛
)
T(n)=O(nlogn)
Recursion Tree View
Level	Subproblems	Work per Subproblem	Total Work at Level
0	1	n	n
1	2	n/2	n
2	4	n/4	n
3	8	n/8	n
…	…	…	…
log₂n	n	1	n

Each level takes O(n) total work.
There are log₂n levels (since we divide by 2 each time).

So:

Total Work
=
𝑂
(
𝑛
)
×
𝑂
(
log
⁡
𝑛
)
=
𝑂
(
𝑛
log
⁡
𝑛
)
Total Work=O(n)×O(logn)=O(nlogn)
🧩 Step 4: Intuitive Explanation

Imagine:

Every element participates in log n merge operations (one per recursion level).

Each merge operation involves comparing and combining elements → total O(n log n).

💾 Step 5: Space Complexity (for completeness)

Each recursive call creates:

Temporary arrays left, right, and result → total O(n)

Recursion depth → O(log n)

✅ So total Space = O(n)

*/