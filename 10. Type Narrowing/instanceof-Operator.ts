class Dog {
    bark() : void {
        console.log("Woff woff");
    }
};

class Cat {
    meow(): void {
        console.log("Meow meow");
    }
};

function animalSound (animal: Dog | Cat) {
    if(animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

animalSound(dog);
animalSound(cat);