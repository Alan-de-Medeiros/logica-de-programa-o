/*Valentina tem 1.50m e cresce 2 centímetros por ano, enquanto Joãozinho, seu irmão mais
novo, tem 1.40m e cresce 3 centímetros por ano. Crie um algoritmo que mostre quando
(quantos anos) João será mais alto que Valentina.*/

import leia from "readline-sync"

/*var Valentina = 1.50;
var Enzo = 1.40;

for( var i = 0; Enzo <= Valentina; i++) {
    Valentina += 0.02;
    Enzo += 0.03;

}

console.log(i + " ANOS QUE ENZO DEMOROU PARA FICAR MAIS ALTO");
console.log("Valentina: " + Valentina + " DE ALTURA");
console.log("Enzo: " + Enzo + " DE ALTURA");*/

var alturaValentina = 1.50;
var alturaJoao = 1.40;
var anos = 0;

while(alturaJoao <= alturaValentina){
    alturaJoao += 0.03;
    alturaValentina += 0.02;
    anos++;
}

console.log("VALENTINA: " + alturaValentina.toFixed(2));
console.log("JOÃO: " + alturaJoao.toFixed(2));
console.log("DEMORA " + anos + " ANOS PARA JOÃO MAIOR QUE VALENTINA")