/*Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200
foram digitados (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido.*/

import leia from "readline-sync"

var contador = 0;

do {
    var num = leia.questionInt("DIGITE UM NUMERO: \n");
    if(num > 100 && num < 200){
        contador++;
    }

}   while(num !== 0);

console.log("FORAM DIGITADO " + contador + " ENTRE 100 E 200");

    
    
