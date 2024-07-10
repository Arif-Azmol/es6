function sumAgain() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const result = sumAgain();
console.log(result());