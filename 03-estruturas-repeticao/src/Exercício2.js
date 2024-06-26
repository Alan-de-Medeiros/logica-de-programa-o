/*Faça um programa que leia um número e mostre os números de do valor informado até 0.*/

import leia from "readline-sync"

var numero = leia.questionInt("INFOREME UM NUMERO: \n");

for(var i = numero; i >= 0; i--){
    console.log(i);
}