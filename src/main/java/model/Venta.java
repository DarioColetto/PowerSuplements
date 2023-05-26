package model;

import java.util.ArrayList;
import java.util.Date;

/**
 * Represents a sale.
 */
public class Venta {

	private int id_venta;
	private int id_cliente;
	private double total;
	private Date fecha;
	private String forma_pago;
	private ArrayList<DetalleRow> detalle;

	/**
	 * Constructor for creating a sale.
	 *
	 * @param id_venta    the ID of the sale
	 * @param id_cliente  the ID of the client associated with the sale
	 * @param total       the total amount of the sale
	 * @param fecha       the date of the sale
	 * @param forma_pago  the payment method used for the sale
	 * @param detalle     the list of detail rows representing the items in the sale
	 */
	public Venta(int id_venta, int id_cliente, double total, Date fecha, String forma_pago, ArrayList<DetalleRow> detalle) {
		this.id_venta = id_venta;
		this.id_cliente = id_cliente;
		this.total = total;
		this.fecha = fecha;
		this.forma_pago = forma_pago;
		this.detalle = detalle;
	}

	/**
	 * Returns the ID of the sale.
	 *
	 * @return the ID of the sale
	 */
	public int getId_venta() {
		return id_venta;
	}

	/**
	 * Sets the ID of the sale.
	 *
	 * @param id_venta the ID of the sale
	 */
	public void setId_venta(int id_venta) {
		this.id_venta = id_venta;
	}

	/**
	 * Returns the ID of the client associated with the sale.
	 *
	 * @return the ID of the client
	 */
	public int getId_cliente() {
		return id_cliente;
	}

	/**
	 * Sets the ID of the client associated with the sale.
	 *
	 * @param id_cliente the ID of the client
	 */
	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	/**
	 * Returns the total amount of the sale.
	 *
	 * @return the total amount of the sale
	 */
	public double getTotal() {
		return total;
	}

	/**
	 * Sets the total amount of the sale.
	 *
	 * @param total the total amount of the sale
	 */
	public void setTotal(double total) {
		this.total = total;
	}

	/**
	 * Returns the date of the sale.
	 *
	 * @return the date of the sale
	 */
	public Date getFecha() {
		return fecha;
	}

	/**
	 * Sets the date of the sale.
	 *
	 * @param fecha the date of the sale
	 */
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	/**
	 * Returns the payment method used for the sale.
	 *
	 * @return the payment method
	 */
	public String getForma_pago() {
		return forma_pago;
	}

	/**
	 * Sets the payment method used for the sale.
	 *
	 * @param forma_pago the payment method
	 */
	public void setForma_pago(String forma_pago) {
		this.forma_pago = forma_pago;
	}

	/**
	 * Returns the list of detail rows representing the items in the sale.
	 *
	 * @return the list of detail rows
	 */
	public ArrayList<DetalleRow> getDetalle() {
		return detalle;
	}

	/**
	 * Sets the list of detail rows representing the items in the sale.
	 *
	 * @param detalle the list of detail rows
	 */
	public void setDetalle(ArrayList<DetalleRow> detalle) {
		this.detalle = detalle;
	}

	@Override
	public String toString() {
		return "Venta [id_venta=" + id_venta + ", id_cliente=" + id_cliente + ", total=" + total + ", fecha=" + fecha
				+ ", forma_pago=" + forma_pago + ", detalle=" + detalle + "]";
	}

}
