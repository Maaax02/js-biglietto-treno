// chiediamo età e numero di km che vogliono percorrere

let age = prompt ("Qual è la vostra età");
let km = prompt ("Quanti km desiderate percorrere?");
let outputHtml = document.getElementById("result");
age = parseInt(age);
km = parseInt(km);

// calcoliamo prezzo e percentuali

let price = (0.21 * km);
console.log(price);

if (age < 18) {
    price = (0.21 * km * 0.2);
    outputHtml.innerHTML=`il prezzo del biglietto è ${price.toFixed(2)}`;

} if (age > 65) 
    price = (0.21 * km * 0.4);
    outputHtml.innerHTML=`il prezzo del biglietto è ${price.toFixed(2)}`;

