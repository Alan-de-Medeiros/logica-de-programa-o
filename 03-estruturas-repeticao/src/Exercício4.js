/*Escreva um algoritmo que leia 15 valores inteiros e, ao final, mostre qual foi o maior e o menor
entre os valores digitados*/

import leia from "readline-sync"

/*var valorMaior;
var valorMenor;

for(var i = 1; i < 16; i++){
    var aux = leia.questionInt("INFORME UM VALOR: \n");

    if (i == 1 || aux > valorMaior){
        valorMaior = aux;
    }

    if (i == 1 || aux < valorMenor){
        valorMenor = aux;
    }
}
console.log("VALOR MAIOR: \n" + valorMaior);
console.log("VALOR MENOR: \n" + valorMenor)*/

var maior;
var menor;

for(var i = 0; i ,15; i++){
    var num = leia.questionInt("DIGITE UM NUMERO " + (i+1) +": ");

    if( i === 0){
        menor = num;
        maior = num;
    }

    if(num < menor){
        menor = num;
    }

    if(num > maior){
        maior = num;
    }
}