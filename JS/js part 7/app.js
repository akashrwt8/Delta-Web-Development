const student = {
    name :"akash",
    age : 20,
    eng : 95,
    math : 99,
    phy : 97,
    getAvg() {
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}

const square = (n) => (n * n);

console.log(square(45));

const id = setInterval(() =>{
    console.log("hello World");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("done!");
}, 10000);



