package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Proveedor;
import repositorio.Repositorio;
import utils.Utils;

/**
 * @author Dario Coletto
 * @since 3-2-2023
 * @version 1.0
 *
 * The DAO class for managing operations on the Proveedor entity.
 * Implements the Repositorio interface.
 */
public class ProveedorDao implements Repositorio<Proveedor, Integer> {


	private Connection connection = null;

    /**
     * Constructor. Establishes the database connection.
     *
     * @throws SQLException if an SQL exception occurs while establishing the connection.
     */
	public ProveedorDao () throws SQLException {

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
     * Creates a new Proveedor record in the database.
     *
     * @param proveedor The Proveedor object to be created.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void create(Proveedor proveedor) throws SQLException {

		String query = "INSERT INTO proveedor (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setString(1, proveedor.getNombre());
		preparedStatement.setString(2, proveedor.getDireccion());
		preparedStatement.setString(3, proveedor.getTelefono());
		preparedStatement.setString(4, proveedor.getEmail());

		ResultSet resultSet = preparedStatement.executeQuery();

		System.out.println(resultSet);

	}

    /**
     * Retrieves a Proveedor object from the database based on the specified id.
     *
     * @param id The id of the Proveedor object to retrieve.
     * @return The retrieved Proveedor object, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */

	@Override
	public Proveedor getById(Integer id) throws SQLException {

		String query = "SELECT * FROM proveedor WHERE id_proveedor = ? " ;

		PreparedStatement ps = connection.prepareStatement(query);

		ps.setInt(1, id);

		ResultSet rs = ps.executeQuery();

		if( rs.next() ) {

			Proveedor proveedor = new Proveedor(
					rs.getInt("id_proveedor"),
					rs.getString("nombre"),
					rs.getString("telefono"),
					rs.getString("email"),
					rs.getString("direccion"));



			return proveedor;
		}

		else{


			return null;
		}


	}

    /**
     * Retrieves all Proveedor objects from the database.
     *
     * @return An ArrayList containing all Proveedor objects.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public ArrayList<Proveedor> getAll() throws SQLException {

		String query = "SELECT * FROM proveedor";

		ArrayList<Proveedor> proveedors = new ArrayList<>();

		PreparedStatement ps = connection.prepareStatement(query);


		ResultSet rs = ps.executeQuery();

		while( rs.next() ) {

			Proveedor proveedor = new Proveedor(
					rs.getInt("id_proveedor"),
					rs.getString("nombre"),
					rs.getString("telefono"),
					rs.getString("email"),
					rs.getString("direccion"));

			proveedors.add(proveedor);
		}


			return proveedors;
	}

    /**
     * Deletes a Proveedor record from the database based on the specified id.
     *
     * @param id The id of the Proveedor object to delete.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub

	}

    /**
     * Updates a Proveedor record in the database.
     *
     * @param proveedor The updated Proveedor object.
     * @return The number of rows affected by the update operation.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public int update(Proveedor proveedor) throws SQLException {

		/*
		UPDATE table_name
		SET column1 = value1, column2 = value2, ...
		WHERE condition;
		*/

		Proveedor proveedorNuevo = proveedor;
		Proveedor proveedorActual = getById(proveedor.getId_proveedor());


		//Principio de la Query
		String query = "UPDATE proveedor SET " ;


		//Concatena los campos a actualizar si son distintos.

		//Nombre
		if ( !proveedorActual.getNombre().equals(proveedorNuevo.getNombre())) {

			query += "nombre=\'" + proveedorNuevo.getNombre() +"\',";
		}
		//Telefono
		if ( !(proveedorActual.getTelefono() == proveedorNuevo.getTelefono())); {

			query += "num_socio=\'" + proveedorNuevo.getTelefono()+"\',";
		}

		//Email
		if ( !proveedorActual.getEmail().equals(proveedorNuevo.getEmail())); {

			query += "direccion=\'" + proveedorNuevo.getEmail()+"\',";
		}

		//Direccion
		if ( !proveedorActual.getDireccion().equals(proveedorNuevo.getDireccion())); {

			query += "telefono=\'" + proveedorNuevo.getDireccion()+"\',";
		}

		query = Utils.deleteComa(query);


		//Final de la query
		query += "WHERE id_proveedor = ?";


		PreparedStatement ps = connection.prepareStatement(query);

		//ps.setInt(1, id);

		int result = ps.executeUpdate();

		return result;


	}


}
