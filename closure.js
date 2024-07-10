function sumAgain() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const result = sumAgain();
// console.log(result());


// array splice, slice, join
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slice = num.slice(2, 5);
console.log(slice);

const splice = num.splice(2, 5);
console.log(splice);

console.log(num);
let num2 = [1, 2, 3, 4, 5, 6, 7];
const join = num2.join(" next number ");
console.log(join);
const join2 = num2.join("");
console.log(join2);
const join3 = num2.join(",");
console.log(join3);