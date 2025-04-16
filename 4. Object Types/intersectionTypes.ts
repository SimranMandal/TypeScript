type PersonInfo = {
    first: string;
    last: string;
    age: number
};

type AccountDetails = {
    username: string;
    password: string
};

type PersonInfoAndAccountDetails = PersonInfo & AccountDetails;

const simran : PersonInfoAndAccountDetails = {
    first: "Simran",
    last: "Mandal",
    age: 22,
    username: "simran_mandal",
    password: "simran19"
};

console.log(`First Name : ${simran.first}, Last Name : ${simran.last}, Age : ${simran.age}, Username : ${simran.username}, Password : ${simran.password}`)
