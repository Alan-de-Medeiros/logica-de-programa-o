/*As maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou
mais cada uma custa apenas R$0,25. Crie um programa para ler o número de maçãs
que ele vai comprar e informar quanto será o total da compra.*/

import leia from "readline-sync"

console.log("Número de Maças compradas")
var quant_maca = leia.questionInt();

if (quant_maca < 12) {
    console.log("Valor total: " + "$" + (0.3 * quant_maca));
} else  {
    console.log("Valor total: " + "$" + (0.25 * quant_maca));

}