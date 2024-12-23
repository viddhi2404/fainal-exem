// Input: Array: [1, 3, 5, 7, 9, 11], Target: 7
// Output: Found at index 3. 
let arr = [1, 3, 5, 7, 9, 11]

let target = 7

let left = 0;
let right = arr.length - 1

function add(){
    while(left <= right){
        let mid  = Math.floor((left + right) / 2)
        if(arr[mid] == target){
           return mid; 
        }

        if(arr[left] <= arr[mid]){
             if(target >= arr[left] && target < arr[mid]){
                 right = mid - 1 
             }else{
                 left = mid + 1
             }
        }else{
             if(target > arr[mid] && target <= arr[right]){
                left = mid + 1
             }else{
                right = mid - 1
             }
        }
    }
    return -1   
}

console.log(add())