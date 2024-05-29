package pkg01.aula.operadores;

public class AulaOperadores {
    
    public static void main(String[] args) {
       // ARITMÉTICOS
     int a = 10 + 1;
     int b = a + 10;
     int c = b * 10;
     int d = c / 10;
            
     
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(10 + 10);
        
        //------------------------------
        //LÓGICOS
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || false;
        boolean valor4 = false || false;
        boolean valor5 = 10 > 9 || 5 > 1;
        
    }
    
}
