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

import dao.ProductoDao;
import model.Producto;

class TestProductoDao {

	
	static ProductoDao productoDao;

	@BeforeEach
	void init() throws SQLException {
		
		productoDao =  new ProductoDao();
	}
	
	@Test
	@DisplayName("Buscar por Id")
	void BuscarUnoByIdTest() throws SQLException {
		
		
		Producto productoPrueba = productoDao.buscar_uno_id(1);
		
		assertEquals(Producto.class, productoPrueba.getClass() );
		
		System.out.println(productoPrueba.toString());
	}
	
	@Test
	@DisplayName("Buscar Todos")
	void BuscarTodosTest() throws SQLException {
		
		ArrayList<Producto> productos = productoDao.buscar_todos();
		
		assertEquals(ArrayList.class, productos.getClass());
		assertTrue(productos.size() > 0);
		
		for(Producto producto : productos) {
			
			System.out.println(producto.toString());
		}
		
	}
	
	/*
	@Test
	void ActualizarTest() throws SQLException {
		
		Producto productoPrueba = new Producto(1, "S345", "Pepe", "34556", "Calle1", "pepe@gmail.com");
		
		productoDao.actualizar(1,productoPrueba);
	}
	*/
	
	@AfterEach
	public void closeConection() throws SQLException {
		
		Connection con = productoDao.getConnection();
		assertTrue(con.isClosed());
		
	}


	
}
