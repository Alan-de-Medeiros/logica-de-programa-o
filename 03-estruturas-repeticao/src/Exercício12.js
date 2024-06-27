import leia, { keyInSelect, question, questionInt } from "readline-sync"

var tentativas;
var chute;
var dificuldade;
var num_magico;
var modo;

var inicio;
console.log("\n_________BEM VINDO AO NUMERO MAGICO_________");
console.log("VAMOS INICIAR O JOGO ?");
while (inicio != 2 && inicio != 1) {
    inicio = leia.questionInt("1 = SIM, 2 = NAO: ");
} if (inicio == 1) {
    while (modo != 1 && modo != 2) {
        modo = leia.questionInt("MODOS DE JOGO: 1 = PVP, 2 = PVE: ")
    } while (modo != 1 && dificuldade != 1 && dificuldade != 2 && dificuldade != 3) {
        dificuldade = leia.questionInt("DIFICULDADES: 1 = FACIL, 2 = MEDIO, 3 = DIFICIL: ");
    } if (modo == 1) {
        num_magico = questionInt("INFORME O NUMERO MAGICO: \n");
    } if (modo == 2) {
        switch (dificuldade) {
            case 1:
                num_magico = Math.floor(Math.random() * 1000);
                break;
            case 2:
                num_magico = Math.floor(Math.random() * 5000);
                break;
            case 3:
                num_magico = Math.floor(Math.random() * 10000);
                break;
        }
    }

    console.clear();
    console.log("O JOGO COMECOU, CHUTE E ACERTE!!!");
    switch (dificuldade) {
        case 1:
            console.log("O NUMERO MAGICO ESTA ENTRE 0 E 1000 \n")
            break;
        case 2:
            console.log("O NUMERO MAGICO ESTA ENTRE 0 E 5000 \n")
            break;
        case 3:
            console.log("O NUMERO MAGICO ESTA ENTRE 0 E 10000 \n")
            break;

    }
    for (tentativas = 0; num_magico != chute; tentativas++) {
        chute = leia.questionInt("TENTE A SORTE: ");
        if (chute > num_magico) {
            console.log("SEU CHUTE FOI ACIMA DO NUMERO MAGICO.\n");
        } if (chute < num_magico) {
            console.log("SEU CHUTE FOI ABAIXO DO NUMERO MAGICO\n");
        }

    }
    console.log("!!!PARABENS VOCE ACERTOU O NUMERO MAGICO!!!");
    console.log("NUMERO DE TENTATIVAS: " + tentativas);
    console.log("CHUTE: " + chute);

} else {
    console.log("_________FINALIZANDO O TERMINAL_________\n");
}

/*var opçaoJogo = leia.keyInSelect(["PvP", "PvE"]);
var numeroMagico; 

if(opçaoJogo === 0){
    numeroMagico = leia.questionInt("DIGITE O NUMERO MAGICO: \n", {
        hideEchobackrue: true
    })

} else if(opçaoJogo === 1){
    
    var dificuldade = leia.keyInSelect(["FACIL", "MEDIA", "DIFICIL"]);
    
    switch(dificuldade){
        case 0:
            numeroMagico = parseInt(Math.random() * 1000);
                break;
        case 1:
            numeroMagico = parseInt(Math.random() * 5000);
                break;
        case 2:
            numeroMagico = parseInt(Math.random() * 100000);
                break;
    }       
}
console.clear()


var  tentativas = 0;
do{
    var palpite = leia.questionInt("DIGITE PALPITE: \n");
    if(palpite > numeroMagico){
        console.log("NUMERO MAGICO E MENOR");
    } else if (palpite < numeroMagico) {
        console.log("NUMERO MAGICO E MAIOR");
    } else {
        console.log("CERTA RESPOSTA");
    }
    tentativas++
}   while(palpite !== numeroMagico);

console.log("QUANTIDADE DE TENTATIVAS = " + tentativas);*/