function uniqueDataTypesFuc<T>(item1: T, item2: T) : [T, T] {
    return [item1, item2];
};

const _num = uniqueDataTypesFuc<number> (20, 10);
const _str = uniqueDataTypesFuc<string> ("Hello", "Hie");
const bool = uniqueDataTypesFuc<boolean> (true, false);

console.log(_num);
console.log(_str); 
console.log(bool);

/* ---------------------------------------------------- */
console.log("--------------------------------------------");


//With interfaces

interface Dog {
    name: string;
    breed: string;
};

const dog1 = uniqueDataTypesFuc<Dog> (
    {name: "Pippo", breed: "Labrador"},
    {name: "Tippo", breed: "German Sheferd"}
);

console.log(dog1);

 
