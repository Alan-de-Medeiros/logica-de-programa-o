/*Crie um algoritmo para realizar a conversão de um número inteiro decimal, para binário. Vale
lembrar, que para realizar esse exercícios, vocês devem usar a técnica da divisão.*/

import leia from "readline-sync"

var decimal = leia.questionInt("DIGITE UM NUMERO: \n");
var binario = "";
var decimal2 = decimal

while(decimal >= 1){
    var result = parseInt(decimal / 2);
    var resto = decimal % 2;
    decimal = result;
    binario = resto + binario;
}

console.log(decimal2 + " EM BINARIO E: " + binario);