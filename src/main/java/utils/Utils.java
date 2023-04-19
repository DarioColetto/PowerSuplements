/**
 * 
 */
package utils;

/**
 * @author Dario Coletto 
 *
 */
public class Utils {
	
	
		/**
		 * Elimina la coma del final de una cadena
		 * @param string
		 * @return
		 */
		public static String delComa(String string) {
			
			StringBuilder stringBuilder = new StringBuilder(string);
			stringBuilder.setCharAt(string.length()-1, ' ');
			
			return stringBuilder.toString();
		}

	
	


}
