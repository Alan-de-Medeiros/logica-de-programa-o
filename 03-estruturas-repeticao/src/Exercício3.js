/*Escreva um algoritmo que conta os números entre 1000 e 1999 e mostra apenas aqueles que
divididos por 11 dão resto 5.*/

import leia from "readline-sync"

for(var i = 1000; i <= 1999; i++){
    if (i % 11 == 5){
        console.log(i)
    }
}