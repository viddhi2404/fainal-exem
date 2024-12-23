// Input: "({[]})"
// Output: true
// // Input: "([)]"Output: false'
function balanceParenthisis(str) {
    let obj = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }
    let arr = [];
    for(let char of str) {
        if(char == "("|| char == "{" || char == "["){
            arr.push(char)
        } else if(arr.length == 0 || arr.pop() != obj[char]){
            return false
        }
    }

    return arr.length == 0;
}

let str = "[{((})}]";
console.log(balanceParenthisis(str));