/*Desenvolva um programa para descobrir se o número lido no teclado é par ou ímpar.*/

import leia, { prompt } from 'readline-sync';

console.log("Informe um Numero");
var numero = leia.prompt();

if (numero %2 == 0) {
    console.log("Número " + numero + " é Par");
}else {
    console.log("Número " + numero + " é Impar");
}