/*Contagem de 10 até 500, depois de 900 até 1000, usando apenas um laço de repetição*/

import leia from "readline-sync"

var i = 10;

while(i <= 1000){
    if(i <= 500 || i >= 900){
        console.log("CONTAGEM = " + i);
    }i++;
}

/*for(var i = 10; i <= 1000; i++){
    if (i <= 500 || i >= 900){
    console.log("CONTAGEM = " + i);
    }   
}*/ 