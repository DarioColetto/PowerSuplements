package test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;
import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import dao.DetalleRowDao;
import model.DetalleRow;

class TestDetalleRowDao {


	static DetalleRowDao productoDao;

	@BeforeEach
	void init() throws SQLException {

		productoDao =  new DetalleRowDao();
	}

	@Test
	@DisplayName("Buscar por Id")
	void BuscarByIdTest() throws SQLException {


		ArrayList<DetalleRow> detalleRow = productoDao.getListById(1);

		System.out.println((detalleRow));

		assertEquals(ArrayList.class, detalleRow.getClass() );

		System.out.println(detalleRow);
	}

}