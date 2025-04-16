class Person {
    name: string;
    readonly age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const person3 = new Person("Simran", 20);
person3.name = "Khush";
// person3.age = 22;  -->> cannot do this as it is readonly

console.log(`The name of the peron is ${person3.name} and age is ${person3.age}`);
console.log(person3);