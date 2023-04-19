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

import dao.ProveedorDao;
import model.Proveedor;

class TestProveedorDao {

	
	static ProveedorDao proveedorDao;

	@BeforeEach
	void init() throws SQLException {
		
		proveedorDao =  new ProveedorDao();
	}
	
	@Test
	@DisplayName("Buscar por Id")
	void BuscarUnoByIdTest() throws SQLException {
		
		
		Proveedor proveedorPrueba = proveedorDao.buscar_uno_id(1);
		
		assertEquals(Proveedor.class, proveedorPrueba.getClass() );
		
		System.out.println(proveedorPrueba.toString());
	}
	
	@Test
	@DisplayName("Buscar Todos")
	void BuscarTodosTest() throws SQLException {
		
		ArrayList<Proveedor> proveedors = proveedorDao.buscar_todos();
		
		assertEquals(ArrayList.class, proveedors.getClass());
		assertTrue(proveedors.size() > 0);
		
		for(Proveedor proveedor : proveedors) {
			
			System.out.println(proveedor.toString());
		}
		
	}
	
	/*
	@Test
	void ActualizarTest() throws SQLException {
		
		Proveedor proveedorPrueba = new Proveedor(1, "S345", "Pepe", "34556", "Calle1", "pepe@gmail.com");
		
		proveedorDao.actualizar(1,proveedorPrueba);
	}
	
	*/
	
	@AfterEach
	public void closeConection() throws SQLException {
		
		Connection con = proveedorDao.getConnection();
		assertTrue(con.isClosed());
		
	}


	
}
