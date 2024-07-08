const num = [3, 5, 8, 9, 2, 7];
const mapResult = num.map(x => x * x);
console.log(mapResult);

const findResult = num.find(x => x < 6);
console.log(findResult);

const filterResult = num.filter(x => x < 6);
console.log(filterResult);