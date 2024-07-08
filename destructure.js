const person = { name: "Arif Azmol", age: 23, address: "jhinaidah", phone:014, job: "web developer", salary: 100000 };
const name = person.name;
const address = person.address;
const { phone, salary } = person;
console.log(name, address, phone);


const freind = ['Arif', 'Azmol', 'Tanvir', 'Arman', 'Kholil'];
const [fastF, secondF, ...bakishobai] = freind;
console.log(fastF);
console.log(secondF);
console.log(bakishobai);


const complexObject = {
    name: 'Arif',
    info: {
        address: 'Arap pur',
        neta: 'Azmol'
    }
};
const { neta } = complexObject.info;
console.log("Neta : " + neta);