/*Final 0 e 1: não pode rodar na segunda-feira;
Final 2 e 3: não pode rodar na terça-feira;
Final 4 e 5: não pode rodar na quarta-feira;
Final 6 e 7: não pode rodar na quinta-feira; 
Final 8 e 9: não pode rodar na sexta-feira;*/

import leia from 'readline-sync'

console.log("Informe o ultimo numero da  Placa");
var placa = leia.questionInt();

switch (placa){
    case 0:
    case 1:
        console.log("Não pode rodar na segunda-feira");
        break;
    case 2:
    case 3:
        console.log("Não pode rodar na terça-feira");
        break;
    case 4:
    case 5:
        console.log("Não pode rodar na quarta-feira");
        break;
    case 6:
    case 7:
        console.log("Não pode rodar na quinta-feira");
        break;
    case 8:
    case 9:
        console.log("Não pode rodar na sexta-feira");
        
}