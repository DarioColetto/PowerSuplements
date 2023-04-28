package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Cliente;
import repositorio.Repositorio;
import utils.Utils;

public class ClienteDao implements Repositorio<Cliente, Integer> {
	
	
	private Connection connection = null;
	
	/**
	 * Constructor. Establece la conexion
	 * @throws SQLException
	 */
	public ClienteDao () throws SQLException {
		
		connection = DBConexion.getConnection();
		
	};

	
	public Connection getConnection() {
		return connection;
	}


	@Override
	public void create(Cliente cliente) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Cliente getById(Integer id) throws SQLException {
		
		String query = "SELECT * FROM cliente WHERE id_cliente = ? " ;
		
		PreparedStatement ps = connection.prepareStatement(query);
		
		ps.setInt(1, id);
		
		ResultSet rs = ps.executeQuery(); 

		if( rs.next() ) {
			
			Cliente cliente = new Cliente(
					rs.getInt("id_cliente"), 
					rs.getString("nombre"), 
					rs.getString("direccion"),
					rs.getString("telefono"),
					rs.getString("email"));
					
			
			ps.close();
			connection.close();
			
			return cliente;
		}
		
		else{
			
			
			return null;
		}
		
		
		
	}

	@Override
	public ArrayList<Cliente> getAll() throws SQLException {
		
		String query = "SELECT * FROM cliente";
		
		ArrayList<Cliente> clientes = new ArrayList<>();
		
		PreparedStatement ps = connection.prepareStatement(query); 
		

		ResultSet rs = ps.executeQuery(); 

		while( rs.next() ) {
			
			Cliente cliente = new Cliente(
					rs.getInt("id_cliente"), 
					rs.getString("nombre"),
					rs.getString("telefono"),
					rs.getString("direccion"),						
					rs.getString("email")
					);
			
			clientes.add(cliente);
		}
			ps.close();
			connection.close();
		
			return clientes;
	}

		
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	
	@Override
	public int update(Integer id, Cliente cliente) throws SQLException {
		
		/*
		UPDATE table_name
		SET column1 = value1, column2 = value2, ...
		WHERE condition;
		*/
		
		Cliente clienteNuevo = cliente;
		Cliente clienteActual = getById(id);
		
		
		//Principio de la Query
		String query = "UPDATE cliente SET " ;
		
		
		//Concatena los campos a actualizar si son distintos.
		
		//Nombre
		if ( !clienteActual.getNombre().equals(clienteNuevo.getNombre())) {
			
			query += "nombre=\'" + clienteNuevo.getNombre() +"\', ";
		}
		
		//Direccion
		if ( !clienteActual.getDireccion().equals(clienteNuevo.getDireccion())); {
			
			query += "direccion=\'" + clienteNuevo.getDireccion()+"\', ";
		}
		
		//telefono
		if ( !clienteActual.getTelefono().equals(clienteNuevo.getTelefono())); {
			
			query += "telefono=\'" + clienteNuevo.getTelefono()+"\', ";
		}
		//email
		if ( !clienteActual.getEmail().equals(clienteNuevo.getEmail())); {
			
			query += "email=\'" + clienteNuevo.getEmail()+"\', ";
		}
		
		
		
		//Quita la ultima coma del final ","
		Utils.delComa(query);

		
		//Final de la query
		query += "WHERE id_cliente = ?";
		
		//PreparedStatement ps = connection.prepareStatement(query);
		
		//ps.setInt(1, id);
		/*
		int result = ps.executeUpdate(); 
		
		return result;*/
		
		System.out.println(query);
		return  1;
	}

}
