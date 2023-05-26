package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.sql.SQLException;
import java.util.ArrayList;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import dao.ClienteDao;
import model.Cliente;

class ClienteDaoTest {
	private ClienteDao clienteDao;

	@BeforeEach
	void setUp() throws SQLException {
		clienteDao = new ClienteDao();
	}

	@AfterEach
	void tearDown() throws SQLException {
		clienteDao.getConnection().close();
	}
	/*
	 * @Test void createTest() throws SQLException { // Create a new Cliente object
	 * Cliente cliente = new Cliente("John Doe", "123 Main St", "555-1234",
	 * "john@example.com");
	 *
	 * // Perform the create operation clienteDao.create(cliente);
	 *
	 * // Retrieve the created Cliente object from the database Cliente
	 * createdCliente = clienteDao.getById(cliente.getId_cliente());
	 *
	 * // Assert that the retrieved Cliente is not null
	 * assertNotNull(createdCliente);
	 *
	 * // Assert that the retrieved Cliente matches the created Cliente
	 * assertEquals(cliente.getNombre(), createdCliente.getNombre());
	 * assertEquals(cliente.getDireccion(), createdCliente.getDireccion());
	 * assertEquals(cliente.getTelefono(), createdCliente.getTelefono());
	 * assertEquals(cliente.getEmail(), createdCliente.getEmail()); }
	 */

	@Test
	void getByIdTest() throws SQLException {

		// Retrieve the Cliente object by ID
		Cliente retrievedCliente = clienteDao.getById(1);

		// Assert that the retrieved Cliente is not null
		assertNotNull(retrievedCliente);

		System.out.println(retrievedCliente.toString());

	}

	@Test
	void getAllTest() throws SQLException {

		// Retrieve all Cliente objects from the database
		ArrayList<Cliente> clientes = clienteDao.getAll();

		// Assert that the list is not null and contains the expected number of Cliente
		// objects
		assertNotNull(clientes);

		for (Cliente cliente : clientes) {

			System.out.println(cliente);
		}

	}
	/*
	 * @Test void deleteTest() throws SQLException { // Create a new Cliente object
	 * and insert it into the database Cliente cliente = new Cliente("John Doe",
	 * "123 Main St", "555-1234", "john@example.com"); clienteDao.create(cliente);
	 *
	 * // Delete the Cliente from the database
	 * clienteDao.delete(cliente.getId_cliente());
	 *
	 * // Attempt to retrieve the deleted Cliente from the database Cliente
	 * deletedCliente = clienteDao.getById(cliente.getId_cliente());
	 *
	 * // Assert that the deleted Cliente is null assertNull(deletedCliente); }
	 */

	@Test
	void updateTest() throws SQLException {
		// Takes the first row from the table clientes

		Cliente cliente = clienteDao.getById(1); // Juan Perez
		System.out.println("Old = " + cliente.toString());

		// Modify the Cliente object
		if (cliente.getNombre().equals("Juan Perez")) {

			cliente.setNombre("John Smith");
			cliente.setDireccion("456 Oak St");
			cliente.setTelefono("555-5678");
			cliente.setEmail("john.smith@example.com");

		}

		else {

			cliente.setNombre("Juan Perez");
			cliente.setDireccion("Calle 123, Ciudad A");
			cliente.setTelefono("555-1234");
			cliente.setEmail("juan.perez@email.com");

		}

		// Perform the update operation
		int result = clienteDao.update(cliente);

		// Assert that the update operation affected one row
		assertEquals(1, result);

		System.out.println("New= " + cliente.toString());
	}
}