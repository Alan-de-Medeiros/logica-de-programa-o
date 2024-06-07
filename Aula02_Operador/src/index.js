import leia from  "readline-sync"

console.log("Escreva valor das corridas")

var valor1 = Number (leia.prompt());
var valor2 = Number (leia.prompt());
var valor3 = Number (leia.prompt());
var valor4 = Number (leia.prompt());
var valor5 = Number (leia.prompt());

var total = (valor1 + valor2 + valor3 + valor4 + valor5)
var desconto = (total * 0.25)
var pagar = (total - desconto)

console.log("Total: " + total + ("$"))
console.log("desconto: " + desconto + ("$"))
console.log("total à pagar: " + pagar + ("$"))