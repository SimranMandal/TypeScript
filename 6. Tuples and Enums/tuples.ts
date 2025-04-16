let myTuple : [string, number, boolean] = ["Hello my dear !", 12, true];

// myTuple = [12, "Hello my dear !"]; --> not valid

console.log(myTuple);

const item : (string | number)[] = ["item 1", 21];
console.log(item);

//Destructuringindividual element
let  myTuple1 : [string, number, boolean] = ["Hello my dear !", 12, true];
let [first, second, third] = myTuple1;
console.log(myTuple1[0]);
console.log(myTuple1[1]);
console.log(myTuple1[2]);






