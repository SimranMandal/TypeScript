const person : {firstName : string; lastName : string; age : number} = {
    firstName : "Simran",
    lastName : "Mandal",
    age : 22
};

console.log(person);

//Objects as function return value

function person1() : {name: string; age : number; location : string} {
    return {
        name : "Simran Mandal",
        age : 22,
        location : "Nagpur"
    };
};

console.log(person1());

