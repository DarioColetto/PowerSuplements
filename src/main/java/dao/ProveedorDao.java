package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Proveedor;
import repositorio.Repositorio;
import utils.Utils;

public class ProveedorDao implements Repositorio<Proveedor, Integer> {

	
	private Connection connection = null;
	
	public ProveedorDao () throws SQLException {
		
		connection = DBConexion.getConnection();
		
	};

	
	public Connection getConnection() {
		return connection;
	}
	
	@Override
	public void create(Proveedor proveedor) {
		// TODO Auto-generated method stub
		
	}

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

			
			ps.close();
			connection.close();
			
			return proveedor;
		}
		
		else{
			
			
			return null;
		}
		
		
	}

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
			ps.close();
			connection.close();
		
			return proveedors;
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int update(Integer id, Proveedor proveedor) throws SQLException {

		/*
		UPDATE table_name
		SET column1 = value1, column2 = value2, ...
		WHERE condition;
		*/
		
		Proveedor proveedorNuevo = proveedor;
		Proveedor proveedorActual = getById(id);
		
		
		//Principio de la Query
		String query = "UPDATE proveedor SET " ;
		
		
		//Concatena los campos a actualizar si son distintos.
		
		//Nombre
		if ( !proveedorActual.getNombre().equals(proveedorNuevo.getNombre())) {
			
			query += "nombre=\'" + proveedorNuevo.getNombre() +"\', ";
		}
		//Telefono
		if ( !(proveedorActual.getTelefono() == proveedorNuevo.getTelefono())); {
			
			query += "num_socio=\'" + proveedorNuevo.getTelefono()+"\', ";
		}
		
		//Email
		if ( !proveedorActual.getEmail().equals(proveedorNuevo.getEmail())); {
			
			query += "direccion=\'" + proveedorNuevo.getEmail()+"\', ";
		}
		
		//Direccion
		if ( !proveedorActual.getDireccion().equals(proveedorNuevo.getDireccion())); {
			
			query += "telefono=\'" + proveedorNuevo.getDireccion()+"\', ";
		}

		
		
		//Quita la ultima coma del final ","
		Utils.delComa(query);

		
		//Final de la query
		query += "WHERE id_proveedor = ?";
		
		//PreparedStatement ps = connection.prepareStatement(query);
		
		//ps.setInt(1, id);
		/*
		int result = ps.executeUpdate(); 
		
		return result;*/
		
		System.out.println(query);
		return  1;
	}


}
