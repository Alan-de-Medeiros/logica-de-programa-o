
package numero_anterior;

import java.util.Scanner;


public class Numero_Anterior {

    
    public static void main(String[] args) {
       Scanner leia = new Scanner(System.in);
       
       System.out.println("Escreva um Número");
        int numero = leia.nextInt();
       
       System.out.println("numero é " + (numero -1));
    }
    
}
