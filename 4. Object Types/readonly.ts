type P = {
    name : string;
    age : number;
    readonly location : string
};

const user2: P = {
    name: "Simran",
    age: 22,
    location : "India"
}

const user3: P = {
    name: "Khushbu",
    age: 24, 
    location: "Kolkata"
}

// user2.location = "Something else"  --->> Can't do that as loction is readonly
user2.name = "Something else"

console.log(`Name : ${user2.name}, Age : ${user2.age}, Location : ${user2.location}`);
console.log(`Name : ${user3.name}, Age : ${user3.age}, Location : ${user3.location}`);