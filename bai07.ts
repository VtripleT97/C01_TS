import { question } from "readline-sync";

let a1: number = Number(question("Nhap toa do a1: "));
let b1: number = Number(question("Nhap toa do a2: "));
// const a: object = [a1 , b1];
let a2: number = Number(question("Nhap toa do b1: "));
let b2: number = Number(question("Nhap toa do b2: "));
// const b: object = [a2 , b2];

let Khoangcachab: number = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2));

console.log(Khoangcachab);