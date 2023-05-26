package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.DetalleRow;

/**
* @author Dario Coletto
* @since 3-2-2023
* @version 1.0
*
* The DAO class for managing operations on the Detale Row entity.
*
*/
public class DetalleRowDao  {

	private Connection connection = null;

    /**
     * Constructor. Establishes the database connection.
     *
     * @throws SQLException if an SQL exception occurs while establishing the connection.
     */
	public DetalleRowDao() throws SQLException{

		connection = DBConexion.getConnection();
	}

	   /**
  * Retrieves the database connection.
  *
  * @return The database connection.
  */
	public Connection getConnection() {
		return connection;
	}

    /**
     * Retrieves a DetalleRow ArrayList object from the database based on the specified id.
     *
     * @param id The id of the DetalleRow object to retrieve.
     * @return DetalleRow ArrayList, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	public ArrayList<DetalleRow> getListById(Integer id) throws SQLException {

		String query = """
								SELECT  detalle_venta.id_producto, producto.nombre, cantidad, precio, subtotal
				FROM venta
				JOIN detalle_venta ON detalle_venta.id_venta = venta.id_venta
				JOIN producto ON detalle_venta.id_producto = producto.id_producto
				WHERE detalle_venta.id_venta = ?
				""";

		PreparedStatement ps = connection.prepareStatement(query);
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();

		ArrayList<DetalleRow> detalleList = new ArrayList<>();

		while (rs.next()) {

			DetalleRow detalleRow = new DetalleRow(
					rs.getInt("id_producto"),
					rs.getString("nombre"),
					rs.getInt("cantidad"),
					rs.getDouble("subtotal"));

			detalleList.add(detalleRow);

		}

		return detalleList;
	}



}
