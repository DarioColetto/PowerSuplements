package dao;

import java.sql.SQLException;
import java.util.List;

import model.Venta;
import repositorio.Repositorio;

public class VentasDao implements Repositorio<Venta, Integer> {

	@Override
	public void crear(Venta entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Venta buscar_uno_id(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Venta> buscar_todos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int actualizar(Integer id, Venta data) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}

}
