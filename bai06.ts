import { question } from "readline-sync";

let Tongsogiay: number = Number(question("Nhap vao so giay can doi: "));

const Hours: number = Math.floor(Tongsogiay / 3600);
const Minutes: number = Math.floor(Tongsogiay % 3600 /60);
const Second: number = Math.floor(Tongsogiay % 3600 % 60);

console.log("Sau khi doi tu giay: " + Hours + ":" + Minutes + ":" + Second);

// const Tongsogiaytrong1phut: number = 60;
// const Tongsogiaytrong1gio: number = 3600;