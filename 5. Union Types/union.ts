let password : number | string = 20; // can give string or number value

type UserInfo = {
    name: string;
    age: number;
    location: string
};

type Account = {
    email: string;
    password: number | string | boolean
}

let user5 : UserInfo | Account = {
    email: "simran@gmail.com",
    password: true,
}

console.log(`email : ${user5.email}, Password : ${user5.password}`)

//In case of arrays

const arr1 : (number | string) [] = [1, 3, 'Simran'];
console.log(arr1)