import { question } from "readline-sync";

let SoX: number = Number(question("Nhap so X: "));
let Soy: number = Number(question("Nhap so Y: "));

const SoS: number = Math.floor((Math.sqrt(SoX) + Math.abs(SoX)) / Math.sqrt(Math.pow(SoX, Soy)));

console.log(SoS);