package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Producto;
import repositorio.Repositorio;
import utils.Utils;

public class ProductoDao implements Repositorio<Producto, Integer> {
	
	private Connection connection = null;
	
	public ProductoDao () throws SQLException {
		
		connection = DBConexion.getConnection();
		
	};

	
	public Connection getConnection() {
		return connection;
	}
	
	@Override
	public void crear(Producto producto) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Producto buscar_uno_id(Integer id) throws SQLException {
		
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
					rs.getInt("stock"));
			
			ps.close();
			connection.close();
			
			return producto;
		}
		
		else{
			
			
			return null;
		}
		
		
	}

	@Override
	public ArrayList<Producto> buscar_todos() throws SQLException {
		
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
					rs.getInt("stock"));
			
			productos.add(producto);
		}
			ps.close();
			connection.close();
		
			return productos;
	}

	@Override
	public void eliminar(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int actualizar(Integer id, Producto producto) throws SQLException {

		/*
		UPDATE table_name
		SET column1 = value1, column2 = value2, ...
		WHERE condition;
		*/
		
		Producto productoNuevo = producto;
		Producto productoActual = buscar_uno_id(id);
		
		
		//Principio de la Query
		String query = "UPDATE producto SET " ;
		
		
		//Concatena los campos a actualizar si son distintos.
		
		//Nombre
		if ( !productoActual.getNombre().equals(productoNuevo.getNombre())) {
			
			query += "nombre=\'" + productoNuevo.getNombre() +"\', ";
		}
		//Numero_socio
		if ( !(productoActual.getPrecio() == productoNuevo.getPrecio())); {
			
			query += "num_socio=\'" + productoNuevo.getPrecio()+"\', ";
		}
		
		//Direccion
		if ( !productoActual.getCategoria().equals(productoNuevo.getCategoria())); {
			
			query += "direccion=\'" + productoNuevo.getCategoria()+"\', ";
		}
		
		//telefono
		if ( !productoActual.getDescripcion().equals(productoNuevo.getDescripcion())); {
			
			query += "telefono=\'" + productoNuevo.getDescripcion()+"\', ";
		}
		//email
		if ( !(productoActual.getStock() == productoNuevo.getStock())); {
			
			query += "email=\'" + productoNuevo.getStock()+"\', ";
		}
		
		
		
		//Quita la ultima coma del final ","
		Utils.delComa(query);

		
		//Final de la query
		query += "WHERE id_producto = ?";
		
		//PreparedStatement ps = connection.prepareStatement(query);
		
		//ps.setInt(1, id);
		/*
		int result = ps.executeUpdate(); 
		
		return result;*/
		
		System.out.println(query);
		return  1;
	}


}
