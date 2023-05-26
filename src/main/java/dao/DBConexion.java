package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * The class for establishing a connection to a MySQL database.
 */
public class DBConexion {

    private static Connection instance = null;

    /**
     * Private constructor to prevent external instantiation of the DBConexion class.
     */
    private DBConexion() {}

    /**
     * Retrieves the connection instance to the MySQL database.
     *
     * @return The connection instance.
     * @throws SQLException if an SQL exception occurs while establishing the connection.
     */
    public static Connection getConnection() throws SQLException {

    	if (instance == null || instance.isClosed()) {
            instance = DriverManager.getConnection("jdbc:mysql://localhost:3306/powersuplementos", "root", "root");
        }
        return instance;
    }
}
