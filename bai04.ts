import { question } from "readline-sync";

let SL: number = Number(question("Nhap so luong: "));
let DG: number = Number(question("Nhap don gia: "));

const TongTien: number = SL * DG;
const TienThue: number = TongTien * 0.1;

console.log("Tien: " + TongTien);
console.log("Thue gia tri gia tang: " + TienThue);
