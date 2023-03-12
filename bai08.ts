import { question } from "readline-sync";

let a: number = Number(question("Nhap so A: "));
let b: number = Number(question("Nhap so B: "));
let temp: number;
temp = 0;
if (a != b){
    temp = a;
    a = b;
    // b = a++;
    b = temp;
}else {
    a = a;
    b = b;
};

console.log("Sau khi hoan vi: " + "So a la: " + a + " " + "So b la: " + b);





