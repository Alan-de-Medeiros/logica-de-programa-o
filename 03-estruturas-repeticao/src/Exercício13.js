/*Crie um algoritmo que receba um número e que ele mostre os números da sequência
fibonacci. (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência
fibonacci). Lembrando que a sequência fibonacci, sempre é a soma dos dois números
anteriores, começando sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5.*/

import leia from "readline-sync"

var numero = leia.questionInt("INFORME ATE QUAL VALOR QUER: \n");

var anterior = 0;
var atual = 1;
var prox; 
var result = "0 - 1";

for(var i = 2; i < numero; i++){
   prox = anterior + atual;
   anterior = atual;
   atual = prox;
   result = result + " - " + prox;
}
    console.log(result);    