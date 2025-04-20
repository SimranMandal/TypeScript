type MyType1 = string | number;

function func(value: MyType1) : void {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}

func("hello");
func(34);