import { question } from "readline-sync";

let SoA: number = Number(question("Nhap so A: "));
let SoB: number = Number(question("Nhap so B: "));
let SoC: number = Number(question("Nhap so C: "));


const Congthuc: number = Math.pow(SoA , 2) * Math.pow(SoB , 2) / SoC ;

console.log(Congthuc);