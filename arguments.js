function add(num1, num2) {
    // console.log(arguments);
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5, 10);
// console.log(result);



// break and continue for for loop

// break means as like as stop the code
var nums = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
        break;
    }
    console.log(nums[i]);
}
console.log("a line break for easy to understand");
// continue, continue means as like as skip
var nums = [1, -2, -3, 4, -5, -6, 7];
for (let i = 0; i < nums.length; i++) {
    if (nums[i]<0) {
        continue;
    }
    console.log(nums[i]);
}