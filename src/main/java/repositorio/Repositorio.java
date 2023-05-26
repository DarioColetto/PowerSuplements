package repositorio;

import java.sql.SQLException;
import java.util.List;

/**
 * @author Dario Coletto
 * @since 3-2-2023
 * @version 1.0
 *
 * The interface for repository operations on entities.
 *
 * @param <T>  The entity type.
 * @param <ID> The type of the entity's ID.
 */
public interface Repositorio<T, ID> {

    /**
     * Creates an entity in the database.
     *
     * @param entity The entity to be created.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
    void create(T entity) throws SQLException;

    /**
     * Retrieves an entity from the database based on the specified ID.
     *
     * @param id The ID of the entity to retrieve.
     * @return The retrieved entity, or null if not found.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
    T getById(ID id) throws SQLException;

    /**
     * Retrieves all entities from the database.
     *
     * @return A list of all entities.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
    List<T> getAll() throws SQLException;

    /**
     * Updates an entity in the database.
     *
     * @param data The updated entity.
     * @return The number of rows affected by the update operation.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
    int update(T data) throws SQLException;

    /**
     * Deletes an entity from the database based on the specified ID.
     *
     * @param id The ID of the entity to delete.
     * @throws SQLException if an SQL exception occurs while performing the operation.
     */
    void delete(ID id) throws SQLException;
}
