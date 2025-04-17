//For objects

interface Movie {
    name: string;
    ratings: number;
    genra? : string
};

const movie1 : Movie = {
    name: "Star Wars",
    ratings: 8.9,
   // genra: "Action"
}

console.log(movie1);

console.log("------------------------------------------------");

/*--------------------------------------------------- */

interface MathOperations {
    (x: number, y: number) : number;
}

const add : MathOperations = (x, y) => {
    return x+y;
}

const subtract : MathOperations = (a, b) => {
    return a-b;
}

console.log(add(2, 3));
console.log(subtract(2, 3));

/*--------------------------------------------------- */
console.log("------------------------------------------------");

//For methods

interface Person5 {
    firstName: string;
    lastName: string;
    _age: number;
    sayHello(): void;
}

function greet(person: Person5) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
    person.sayHello();   
}

const _simran: Person5 = {
    firstName: "Simran",
    lastName: "Mandal",
    _age: 22,
    sayHello() {
        console.log("Hi there");
    },
    
}

const Khush: Person5 = {
    firstName: "Khush",
    lastName: "Mandal",
    _age: 24,
    sayHello() {
        console.log("Good night");
    },
    
}

// console.log(greet(_simran));
// console.log(greet(Khush));

greet(_simran);
greet(Khush);

/* ------------------------------------------------------ */
console.log("------------------------------------------------");

interface Song {
    name: string;
    artist: string;
    printSongInfo(name: string, artist: string) : string;
};

const song1 : Song = {
    name: "Dhichik Dhichik",
    artist: "Pata Nahi Kon",
    printSongInfo: (name, artist) => {
        return `Song : ${song1.name}, Artist : ${song1.artist} `;
    }
}

console.log(song1.printSongInfo("Dhichik Dhichik", "Pata Nahi Kon"));

/* ----------------------------------------------------------------------- */

console.log("------------------------------------------------");

//Parent to child interface

interface MovieDetails {
    name: string;
    rating1: number;
    printMovieInfo(name: string, rating1: number) : string | number;
};

interface MovieGenra extends MovieDetails {
    genra: string;
};

const movie2 : MovieGenra = {
    name: "Ajab Prem ki Gajab Kahani",
    rating1: 8,
    genra: "Rom-Com",
    printMovieInfo(name: string, rating: number): string | number {
        return `Movie: ${movie2.name}, Ratings: ${movie2.rating1}, Genra: ${movie2.genra}`;
    },
};


console.log(movie2.printMovieInfo("Ajab Prem ki Gajab Kahani", 8));

/* ----------------------------------------------------------------------- */

console.log("------------------------------------------------");

//Interfaces with classes

interface Vehicle {
    start() : void;
    stop() : void;
};

class Car implements Vehicle {
    start() : void {
        console.log(`Car's starting...`);
    }

    stop(): void {
        console.log(`Car Stopped`);
    }
};

const car = new Car();
car.start();
car.stop();
