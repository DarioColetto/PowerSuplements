package test;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Connection;
import java.sql.SQLException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.google.gson.Gson;

import dao.VentasDao;
import model.Venta;


class TestVentaDao {


	static VentasDao ventaDao;

	@BeforeEach
	void init() throws SQLException {

		ventaDao =  new VentasDao();
	}

	@Test
	@DisplayName("Buscar por Id")
	void BuscarUnoByIdTest() throws SQLException {


		Venta ventaPrueba = ventaDao.getById(1);

		assertEquals(Venta.class, ventaPrueba.getClass() );

		Gson gson = new Gson();

		String json = gson.toJson(ventaPrueba);

		System.out.println(json);
	}

	/*
	@Test
	@DisplayName("Buscar Todos")
	void BuscarTodosTest() throws SQLException {

		ArrayList<Venta> productos = ventaDao.getAll();

		assertEquals(ArrayList.class, productos.getClass());
		assertTrue(productos.size() > 0);

		for(Venta producto : productos) {

			System.out.println(producto.toString());
		}

	}
	*/
	/*
	@Test
	void ActualizarTest() throws SQLException {

		Venta ventaPrueba = new Venta(1, "S345", "Pepe", "34556", "Calle1", "pepe@gmail.com");

		ventaDao.actualizar(1,ventaPrueba);
	}
	*/

	@AfterEach
	public void closeConection() throws SQLException {

		Connection con = ventaDao.getConnection();
		assertTrue(con.isClosed());

	}



}
