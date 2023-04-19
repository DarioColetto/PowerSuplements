package repositorio;

import java.sql.SQLException;
import java.util.List;


public interface Repositorio<T, ID> {
	
	/**
	 * Crea el objeto en la base de datos
	 */
	void crear(T entity); // Le estaria faltando el objeto
	
	/**
	 * Busca el elemento por id.
	 * @param id
	 * @return T
	 * @throws SQLException 
	 */
	T buscar_uno_id(ID id) throws SQLException;  
	
	/**
	 * Devuelve una lista de objetos
	 * @return List<T>
	 * @throws SQLException 
	 */
	List<T> buscar_todos() throws SQLException;  //(Iterable<ID> ids)
	
	/**
	 * 
	 * @param id
	 * @param data
	 * @return either (1) the row count for SQL Data Manipulation Language (DML) statementsor (2) 0 for SQL statements that return nothing
	 * @throws SQLException
	 */
	int actualizar (ID id, T data) throws SQLException; 
	
	/**
	 * Elimna el objeto en la base de datos por el id
	 * @param id
	 */
	void eliminar(ID id);
	

}