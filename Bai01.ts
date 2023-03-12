import {question} from "readline-sync";

let NhapHovaTen: string = question("Nhap Ho va Ten: ");
let NhapNamsinh: number = Number(question("Nhap Nam sinh: "));
let NhapCunghoangdao: string = question("Nhap cung hoang dao: ");

console.log("Ten: " + NhapHovaTen);
console.log("Nam Sinh: " + NhapNamsinh);
console.log("Cung Hoang Dao: " + NhapCunghoangdao);