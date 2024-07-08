const students = [
    { id: 23, name: "Arif" },
    { id: 33, name: "Azmol" },
    { id: 42, name: "Abdul" },
    { id: 12, name: "Jafor" },
    { id: 67, name: "Golam" },
]
const names = students.map(x => x.name);
console.log(names);

const ids = students.map(x => x.id);
console.log(ids);

const idFilter = students.filter(x => x.id < 55);
console.log(idFilter);

const idFind = students.find(x => x.id < 55);
console.log(idFind);