package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Producto;
import repositorio.Repositorio;
import utils.Utils;

/**
 * @author Dario Coletto
 * @since 3-2-2023
 * @version 1.0
 *
 * The DAO class for managing operations on the Producto entity.
 * Implements the Repositorio interface.
 */
public class ProductoDao implements Repositorio<Producto, Integer> {

	private Connection connection = null;


    /**
     * Constructor. Establishes the database connection.
     *
     * @throws SQLException if an SQL exception occurs while establishing the connection.
     */
	public ProductoDao () throws SQLException {

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
     * @param producto The Producto object to be created.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void create(Producto producto) throws SQLException {

		String query = "INSERT INTO producto (nombre,precio, stock, categoria, foto , descripcion, id_proveedor) VALUES (?, ?, ?, ?,?, ?, ?)";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setString(1, producto.getNombre());
		preparedStatement.setDouble(2, producto.getPrecio());
		preparedStatement.setInt(3, producto.getStock());
		preparedStatement.setString(4, producto.getCategoria());
		preparedStatement.setString(4, producto.getFoto());
		preparedStatement.setString(4, producto.getDescripcion());
		preparedStatement.setInt(4, producto.getId_proveedor());

		ResultSet resultSet = preparedStatement.executeQuery();

		System.out.println(resultSet);

	}


    /**
     * Retrieves a Producto object from the database based on the specified id.
     *
     * @param id The id of the Producto object to retrieve.
     * @return The retrieved Producto object, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public  Producto getById(Integer id) throws SQLException {

		String query = "SELECT * FROM producto WHERE id_producto = ? " ;

		PreparedStatement ps = connection.prepareStatement(query);

		ps.setInt(1, id);

		ResultSet rs = ps.executeQuery();

		if( rs.next() ) {

			Producto producto = new Producto(
					rs.getInt("id_producto"),
					rs.getString("nombre"),
					rs.getDouble("precio"),
					rs.getString("categoria"),
					rs.getString("descripcion"),
					rs.getString("foto"),
					rs.getInt("stock"),
					rs.getInt("id_proveedor"));



			return producto;
		}

		else{


			return null;
		}


	}


    /**
     * Retrieves all Producto objects from the database.
     *
     * @return An ArrayList containing all Producto objects.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public ArrayList<Producto> getAll() throws SQLException {

		String query = "SELECT * FROM producto";

		ArrayList<Producto> productos = new ArrayList<>();

		PreparedStatement ps = connection.prepareStatement(query);


		ResultSet rs = ps.executeQuery();

		while( rs.next() ) {

			Producto producto = new Producto(
					rs.getInt("id_producto"),
					rs.getString("nombre"),
					rs.getDouble("precio"),
					rs.getString("categoria"),
					rs.getString("descripcion"),
					rs.getString("foto"),
					rs.getInt("stock"),
					rs.getInt("id_proveedor"));

			productos.add(producto);
		}


			return productos;
	}


    /**
     * Deletes a Producto record from the database based on the specified id.
     *
     * @param id The id of the Producto object to delete.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public void delete(Integer id) throws SQLException {

		String query = "DELETE FROM producto WHERE id_producot  = ?";

		PreparedStatement preparedStatement = connection.prepareStatement(query);

		preparedStatement.setInt(1, id);

		ResultSet resultSet = preparedStatement.executeQuery();

		System.out.println(resultSet);

	}


    /**
     * Updates a Producto record in the database.
     *
     * @param producto The updated Producto object.
     * @return The number of rows affected by the update operation.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
	@Override
	public int update(Producto producto) throws SQLException {

		Producto productoNuevo = producto;

		// Obtiene el id para hacer las comparaciones
		int id = productoNuevo.getId_producto();

		Producto productoActual = getById(id);


		//Principio de la Query
		String query = "UPDATE producto SET " ;

		//Concatena los campos a actualizar si son distintos.

		//Nombre
		if ( !productoActual.getNombre().equals(productoNuevo.getNombre())) {

			query += "nombre=\'" + productoNuevo.getNombre() +"\',";
		}
		//Precio
		if ( !(productoActual.getPrecio() == productoNuevo.getPrecio())); {

			query += "precio=\'" + productoNuevo.getPrecio()+"\',";
		}

		//Categoria
		if ( !productoActual.getCategoria().equals(productoNuevo.getCategoria())); {

			query += "categoria=\'" + productoNuevo.getCategoria()+"\',";
		}

		//descripcion
		if ( !productoActual.getDescripcion().equals(productoNuevo.getDescripcion())); {

			query += "descripcion=\'" + productoNuevo.getDescripcion()+"\',";
		}
		//stock
		if ( !(productoActual.getStock() == productoNuevo.getStock())); {

			query += "stock=\'" + productoNuevo.getStock()+"\',";
		}

		//Id_proveedor
		if ( !(productoActual.getId_proveedor() == productoNuevo.getId_proveedor())); {

			query += "id_proveedor=\'" + productoNuevo.getStock()+"\',";
		}


		query = Utils.deleteComa(query);

		query += "WHERE id_producto = ?";

		PreparedStatement ps = connection.prepareStatement(query);

		ps.setInt(1, id);

		int result = ps.executeUpdate();

		return result;


	}


}
