
package retangulo;

import java.util.Scanner;
import javax.swing.JOptionPane;


public class Retangulo {

   
    public static void main(String[] args) {
        
           String larguraStr = JOptionPane.showInputDialog("Digite a largura do retângulo:");
        String alturaStr = JOptionPane.showInputDialog("Digite a altura do retângulo:");
        
        double largura = Double.parseDouble(larguraStr);
        double altura = Double.parseDouble(alturaStr);
        
        double area = largura * altura;
        
        JOptionPane.showMessageDialog(null, "A área do retângulo é: " + area);

        
    }
    
}
