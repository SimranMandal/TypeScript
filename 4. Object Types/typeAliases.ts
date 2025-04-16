type User = {
    name : string;
    age : number;
    location : string
};


const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
};

console.log(printUserInfo({name: "Simran", age: 20, location: "India"}));
