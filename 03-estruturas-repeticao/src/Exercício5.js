/*Você está desenvolvendo um software para calcular preços do xerox de uma papelaria. Cada
cópia custa R$0,33. Crie um algoritmo que mostre os valores de quanto custa 1 cópia até
quanto custa 500 cópias.*/

import leia from "readline-sync"

for(var i = 1; i <= 500; i++){
    var preço = i * 0.33;
    console.log(i + " copia(s) = R$" + preço);
}