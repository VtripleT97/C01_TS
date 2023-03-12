import { question } from "readline-sync";


let Biensoxe: string = question("Nhap bien so xe: ");

let Tong: number = 0;
for (let i: number = 0; i < Biensoxe.length; i++) {
     Tong += parseInt(Biensoxe[i]);  //Dung parseInt thay vi Number de tiet kiem bo nho//
}

let Tongso: number = Tong % 10;

console.log(Tongso);