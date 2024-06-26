/*Crie um algoritmo para mostrar a tabuada de um número até 10. Você deve solicitar ao
usuário o número do qual ele deseja a tabuada. O algoritmo deve mostrar a tabuada de um
número que ele digitar.*/

import leia from "readline-sync"

var numero = leia.questionInt("INFORME UM NUMERO: \n");

for (var i = 1; i <= 10; i++) {
    var conta = numero * i;
    console.log(numero + " X " + i + " = " + conta);
}