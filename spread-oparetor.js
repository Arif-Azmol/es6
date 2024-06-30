const age = [20, 48, 54, 83, 80];
const age2 = [67, 83, 52];
// const allAge = age.concat(age2);
// console.log(allAge);
const allAge2 = [...age, ...age2];
console.log(allAge2);

// const businesss = 650;
// const minitser = 350;
// const sochib = 150;
// const maximum = Math.max(businesss, minitser, sochib);
// console.log(maximum);
const taka = [650, 350, 150];
const result = Math.max(...taka);
console.log(result);
