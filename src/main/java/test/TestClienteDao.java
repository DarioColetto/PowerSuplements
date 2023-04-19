package test;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import dao.ClienteDao;
import model.Cliente;

class TestClienteDao {

	
	static ClienteDao clienteDao;

	@BeforeEach
	void init() throws SQLException {
		
		clienteDao =  new ClienteDao();
	}
	
	@Test
	@DisplayName("Buscar por Id")
	void BuscarUnoByIdTest() throws SQLException {
		
		
		Cliente clientePrueba = clienteDao.buscar_uno_id(1);
		
		assertEquals(Cliente.class, clientePrueba.getClass() );
		
		System.out.println(clientePrueba.toString());
	}
	
	@Test
	@DisplayName("Buscar Todos")
	void BuscarTodosTest() throws SQLException {
		
		ArrayList<Cliente> clientes = clienteDao.buscar_todos();
		
		assertEquals(ArrayList.class, clientes.getClass());
		assertTrue(clientes.size() > 0);
		
		for(Cliente cliente : clientes) {
			
			System.out.println(cliente.toString());
		}
		
	}
	
	
	@Test
	void ActualizarTest() throws SQLException {
		
		Cliente clientePrueba = new Cliente(1, "S345", "Pepe", "34556", "Calle1", "pepe@gmail.com");
		
		clienteDao.actualizar(1,clientePrueba);
	}
	
	
	@AfterEach
	public void closeConection() throws SQLException {
		
		Connection con = clienteDao.getConnection();
		assertTrue(con.isClosed());
		
	}


	
}
