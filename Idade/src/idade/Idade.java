
package idade;

import java.util.Scanner;


public class Idade {

    
    public static void main(String[] args) {
        Scanner s = new Scanner (System.in);
        
        System.out.println("DIGITE QTD DE ANOS: ");
        int anos = s.nextInt();
        
        System.out.println("DIGITE QTD DE MESES");
        int meses = s.nextInt();
        
        System.out.println("DIGITE QTD DE DIAS");
        int dias = s.nextInt();
        
        int totalAnos = anos * 365;
        int totalMees = meses * 30;
        int totalDias = dias + totalAnos + totalMees;
        
        System.out.println("vOCÊ VIVEU " + totalDias + " DIAS.");
    }
    
}
