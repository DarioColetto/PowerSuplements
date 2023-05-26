package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.DetalleRow;
import model.Venta;
import repositorio.Repositorio;

/**
 * @author Dario Coletto
 * @since 3-2-2023
 * @version 1.0
 *
 *          The DAO class for managing operations on the Venta entity.
 *          Implements the Repositorio interface.
 */
public class VentasDao implements Repositorio<Venta, Integer> {

	private Connection connection = null;

	/**
	 * Constructor. Establishes the database connection.
	 *
	 * @throws SQLException if an SQL exception occurs while establishing the
	 *                      connection.
	 */
	public VentasDao() throws SQLException {

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
     * Creates a new Venta record in the database.
     *
     * @param venta The Venta object to be created.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void create(Venta entity) {
		// TODO Auto-generated method stub

	}

    /**
     * Retrieves a Venta object from the database based on the specified id.
     *
     * @param id The id of the Venta object to retrieve.
     * @return The retrieved Venta object, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public Venta getById(Integer id) throws SQLException {

		DetalleRowDao detalleRowDao = new DetalleRowDao();

		// Get detalle
		ArrayList<DetalleRow> detalle = detalleRowDao.getListById(id);

		// Get Venta
		String query = """
					SELECT DISTINCT
				venta.id_venta,
				id_cliente,
				fecha,
				forma_pago,
				(SELECT SUM(subtotal) FROM detalle_venta WHERE venta.id_venta = detalle_venta.id_venta ) total
				 FROM venta
				JOIN detalle_venta
				ON  venta.id_venta = detalle_venta.id_venta
				WHERE venta.id_venta = ?
					""";

		PreparedStatement ps = connection.prepareStatement(query);

		ps.setInt(1, id);

		ResultSet resultSet = ps.executeQuery();

		if (resultSet.next()) {

			Venta venta = new Venta(resultSet.getInt("id_venta"), resultSet.getInt("id_cliente"),
					resultSet.getDouble("total"), resultSet.getDate("fecha"), resultSet.getString("forma_pago"),
					detalle);

			ps.close();
			connection.close();

			return venta;
		}

		else {

			return null;
		}
	}

    /**
     * Retrieves a Venta object from the database based on the specified id.
     *
     * @param id The id of the Venta object to retrieve.
     * @return The retrieved Venta object, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public List<Venta> getAll() throws SQLException {

		DetalleRowDao detalleRowDao = new DetalleRowDao();

		ArrayList<Venta> ventas = new ArrayList<>();
		// Get detalle

		// Get Venta
		String query = """
					SELECT DISTINCT
				venta.id_venta,
				id_cliente,
				fecha,
				forma_pago,
				(SELECT SUM(subtotal) FROM detalle_venta WHERE venta.id_venta = detalle_venta.id_venta ) total
				 FROM venta
				JOIN detalle_venta
				ON  venta.id_venta = detalle_venta.id_venta
					""";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		ResultSet resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			int id = resultSet.getInt("id_venta");

			ArrayList<DetalleRow> detalle = detalleRowDao.getListById(id);

			Venta venta = new Venta(resultSet.getInt("id_venta"), resultSet.getInt("id_cliente"),
					resultSet.getDouble("total"), resultSet.getDate("fecha"), resultSet.getString("forma_pago"),
					detalle);

			ventas.add(venta);
		}

		return ventas;
	}



    /**
     * Deletes a Venta record from the database based on the specified id.
     *
     * @param id The id of the Venta object to delete.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub

	}

    /**
     * Updates a Ventae record in the database.
     *
     * @param cliente The updated Ventae object.
     * @return The number of rows affected by the update operation.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public int update(Venta data) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}


}
