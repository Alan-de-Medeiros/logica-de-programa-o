/*Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso
ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer
outra senha digitada, informar “acesso negado”.*/

import leia from "readline-sync"

console.log("Informe à senha");
 var senha = leia.prompt();

if (senha == 1234){
    console.log("Acesso Permitido");
}else  {
    console.log("Acesso Negado");
}




