package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConexion {
	
	public static Connection instance = null;
	
	public DBConexion() {};
	
	public static Connection getConnection() throws SQLException {
		
		instance = DriverManager.getConnection("jdbc:mysql://localhost:3306/powersuplementos", "root", "root"); //database, user, passs
		
		return instance;
	}

}
