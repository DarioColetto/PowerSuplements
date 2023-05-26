package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Cliente;
import repositorio.Repositorio;
import utils.Utils;

/**
 * @author Dario Coletto
 * @since 3-2-2023
 * @version 1.0
 *
 * The DAO class for managing operations on the Cliente entity.
 * Implements the Repositorio interface.
 */
public class ClienteDao implements Repositorio<Cliente, Integer> {


	private Connection connection = null;

    /**
     * Constructor. Establishes the database connection.
     *
     * @throws SQLException if an SQL exception occurs while establishing the connection.
     */
	public ClienteDao() throws SQLException {

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
     * Creates a new Cliente record in the database.
     *
     * @param cliente The Cliente object to be created.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void create(Cliente cliente) throws SQLException {

		String query = "INSERT INTO cliente (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setString(1, cliente.getNombre());
		preparedStatement.setString(2, cliente.getDireccion());
		preparedStatement.setString(3, cliente.getTelefono());
		preparedStatement.setString(4, cliente.getEmail());

		ResultSet resultSet = preparedStatement.executeQuery();

		System.out.println(resultSet);
	}

    /**
     * Retrieves a Cliente object from the database based on the specified id.
     *
     * @param id The id of the Cliente object to retrieve.
     * @return The retrieved Cliente object, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public Cliente getById(Integer id) throws SQLException {

		String query = "SELECT * FROM cliente WHERE id_cliente = ? ";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setInt(1, id);

		ResultSet resultSet = preparedStatement.executeQuery();

		if (resultSet.next()) {

			Cliente cliente = new Cliente(resultSet.getInt("id_cliente"), resultSet.getString("nombre"), resultSet.getString("direccion"),
					resultSet.getString("telefono"), resultSet.getString("email"));


			return cliente;
		}

		else {

			return null;
		}

	}

    /**
     * Retrieves all Cliente objects from the database.
     *
     * @return An ArrayList containing all Cliente objects.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public ArrayList<Cliente> getAll() throws SQLException {

		String query = "SELECT * FROM cliente";

		ArrayList<Cliente> clientes = new ArrayList<>();

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		ResultSet resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			Cliente cliente = new Cliente(resultSet.getInt("id_cliente"), resultSet.getString("nombre"), resultSet.getString("telefono"),
					resultSet.getString("direccion"), resultSet.getString("email"));

			clientes.add(cliente);
		}


		return clientes;
	}

    /**
     * Deletes a Cliente record from the database based on the specified id.
     *
     * @param id The id of the Cliente object to delete.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void delete(Integer id) throws SQLException {

		String query = "DELETE FROM cliente WHERE id_cliente = ?";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setInt(1, id);

		ResultSet resultSet = preparedStatement.executeQuery();

		System.out.println(resultSet);

	}

    /**
     * Updates a Cliente record in the database.
     *
     * @param cliente The updated Cliente object.
     * @return The number of rows affected by the update operation.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public int update(Cliente cliente) throws SQLException {

		Cliente clienteNuevo = cliente;
		// Obtiene el id para hacer las comparaciones
		int id = clienteNuevo.getId_cliente();

		Cliente clienteActual = getById(id);

		// Principio de la Query
		String query = "UPDATE cliente SET ";

		// Concatena los campos a actualizar si son distintos.

		// Nombre
		if (!clienteActual.getNombre().equals(clienteNuevo.getNombre())) {

			query += "nombre=\'" + clienteNuevo.getNombre() + "\',";
		}

		// Direccion
		if (!clienteActual.getDireccion().equals(clienteNuevo.getDireccion()))
			;
		{

			query += "direccion=\'" + clienteNuevo.getDireccion() + "\',";
		}

		// telefono
		if (!clienteActual.getTelefono().equals(clienteNuevo.getTelefono()))
			;
		{

			query += "telefono=\'" + clienteNuevo.getTelefono() + "\',";
		}
		// email
		if (!clienteActual.getEmail().equals(clienteNuevo.getEmail()))
			;
		{

			query += "email=\'" + clienteNuevo.getEmail() + "\',";
		}

		query = Utils.deleteComa(query);

		// Final de la query
		query += "WHERE id_cliente = ?";


		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setInt(1, id);

		int result = preparedStatement.executeUpdate();

		return result;

	}

}
