class myClass {
    private num = 0;

    get getNum(): number {
        return this.num;
    }

    set setNum(value: number){
        this.num = value;
    }
};

const c1 = new myClass;
console.log(`Before setting the value of num : ${c1.getNum}`);

c1.setNum = 23;
console.log(`After setting the value of num : ${c1.getNum}`);


