/*Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos e mostre a
soma dos números ímpares e o produto (multiplicação) dos números pares.*/

import leia from "readline-sync"

var soma = 0 ; 
var mult = 1 ;
for(var i = 0; i < 6; i++){
    var num = leia.questionInt("DIGITE UM NUMERO: \n");

    if(num % 2 === 0){
        mult = mult * num;
    } else {
        soma = soma + num;
    }
}

console.log("SOMA = " + soma);
console.log("MULT = " + mult);

