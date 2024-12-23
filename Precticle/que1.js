// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1] 
let arr = [4, 5, 2, 25];
let stack = [];
let ans = new Array(arr.length).fill(-1);

for(let i=0; i<arr.length; i++){
    while(stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]){
        ans[stack.pop()] = arr[i];
    }

    stack.push(i)
}

console.log(ans);
