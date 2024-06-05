
package numero_de_eleitores;

import java.util.Scanner;


public class Numero_de_Eleitores {

   
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        System.out.println("DIGITE O TOTAL DE ELEITORES: ");
        int eleitores = s.nextInt();
        
        System.out.println("DIGITE QTD VOTOS NULOS: ");
        int nulos = s.nextInt();
        
        System.out.println("DIGITE QTD DE VOTOS BRANCOS: ");
        int brancos = s.nextInt();
        
        System.out.println("DIGITE QTD VOTOS VÁLIDOS");
        int validos = s.nextInt();
        
        double nuloPercentual = (nulos * 100 / eleitores);
        double brancoPercentual = (brancos * 100 / eleitores);
        double validosPercentual = (validos * 100 / eleitores);
        
        System.out.println("PORCENTAGEM NULOS: " + nuloPercentual + "%");
        System.out.println("PORCENTAGEM BRANCOS: " + brancoPercentual + "%");
        System.out.println("PORCENTAGEM VÁLIDOS: " +  validosPercentual + "%");
                
        
    }
    
}
