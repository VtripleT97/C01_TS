import { question } from "readline-sync";

let Nhapbankinh: number = Number(question("Nhap ban kinh: "));
let PI: number = 3.14;

const ChuVi: number = (Nhapbankinh * 2) * PI;
const DienTich: number = PI * Math.pow(Nhapbankinh , 2);

console.log("Chu vi: " + ChuVi);
console.log("Dien tich: " + DienTich);