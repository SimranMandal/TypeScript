type User1 = {
    name : string;
    age : number;
    location? : string
};

const user: User1 = {
    name: "Simran",
    age: 22,
    location : "India"
}

const user1: User1 = {
    name: "Khushbu",
    age: 24,

}

user.name = "Something else"

console.log(`Name : ${user.name}, Age : ${user.age}, Location : ${user.location}`);
console.log(`Name : ${user1.name}, Age : ${user1.age}, Location : ${user1.location}`);
