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
		 * Remove the trailing comma
		 * @param string
		 * @return String
		 */
		public static String deleteComa(String string) {

			StringBuilder stringBuilder = new StringBuilder(string);
			stringBuilder.setCharAt(string.length()-1, ' ');

			return stringBuilder.toString();
		}





}
