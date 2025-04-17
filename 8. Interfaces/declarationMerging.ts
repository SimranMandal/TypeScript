//Original interface
interface Car {
    brand: string;
    start(): void;
};

//interface extension
interface Car {
    price: number;
    stop(): void;
};

const car1: Car = {
    brand : "Fortuner",
    price : 10000000,
    start() : void {
        console.log(`Car Started.`);
    },
    stop() : void {
        console.log(`Car stopped`);
    }
};

console.log(`Car's brand ${car1.brand}, Car's price ${car1.price}`);
car1.start();
car1.stop();

