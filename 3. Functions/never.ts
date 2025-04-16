//Function call will cause a compile-tim error because the function never returns

function throwError (msg : string) : never {
    throw new Error(msg);
};


function infinteLoop () : never {
    while(true);
}

let x : never;

function neverReturns() : never {
    while(true);
}

// x = neverReturns();  

