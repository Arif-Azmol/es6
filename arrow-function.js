const doubleIt = num => num * 2;
const result = doubleIt(10);
console.log(result);

const add = (X, Y) => X + Y;
const result2 = add(15, 15);
console.log(result2);

const give = () => 5;
const result3 = give();
console.log(result3);

const doMath = (X, Y) => {
    const add = X + Y;
    const diff = X - Y;
    const multiple = add * diff;
    return multiple;
}
const result4 = doMath(7, 5);
console.log(result4);