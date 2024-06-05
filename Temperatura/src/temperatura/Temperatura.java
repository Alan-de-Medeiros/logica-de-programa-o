
package temperatura;

import java.util.Scanner;


public class Temperatura {

    
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        System.out.println("INFORME A TEMPERATURA EM C°: ");
        double celcius = s.nextDouble();
        
        double farenhait = (1.8 * celcius) + 32;
        double kelvin = celcius + 273.15;
        
        System.out.println("CELSIUS: " + celcius + "°C");
        System.out.println("FARENHAIT: " + farenhait + "°F");
        System.out.println("KELVIN: " + kelvin + "°K");
    }
    
}
