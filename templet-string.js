// const firstName = "Arif";
// const lastName = "Azmol";
// const fullName = firstName + " " + lastName;
// console.log(fullName);
// fullName2 = `${firstName} ${lastName} is a good boy`;
// console.log(fullName2);


// const multiLine = "I love you"
//     + "I miss you"
//     + "I need you";
// console.log(multiLine);

// const multiLine2 = "I love you\n"
//     + "I miss you\n"
//     + "I need you";
// console.log(multiLine2);



// class, constructor, create object

// class student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "JHGHS";
//     }
// }
// const student1 = new student(12, "Arif");
// const student2 = new student(17, "Azmol");
// console.log(student1);
// console.log(student2);


// inherite class
class parent {
    constructor(){
        this.fatherName = "Bodi";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName; 
    }
}
const baby = new child("Arif");
const baby2 = new child("Azmol");
console.log(baby.getFullName());
console.log(baby2.getFullName());