class Person1 {
    public name: string;
    protected age: number;
    private password: string;

    constructor (name: string, age: number, password: string){
        this.name = name;
        this.age = age;
        this.password = password;
    };

    getPassword() : string {
        return `Password is ${this.password}`;
    };
};

class Comman extends Person1 {
    constructor(name: string, age: number, password: string){
        super(name, age, password);

        // console.log(`Age is ${age}`);
        // console.log(`Password is ${password}`);
    }
}

const p1 = new Person1("Simran", 22, "12345")
const p2 = new Comman("Khush", 24, "34567")
console.log(p1);
console.log(p1.getPassword()); 
console.log(p2.getPassword());




