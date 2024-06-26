/*Faça um algoritmo que leia um número e mostre os números de 0 até o valor informado pelo
usuário.*/

import leia from "readline-sync"

var numero = leia.questionInt("INFORME UM  NUMERO: \n");

for(var i = 0; i <= numero; i++){
console.log(i);
}