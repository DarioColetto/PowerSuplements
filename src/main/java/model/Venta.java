package model;

import java.util.Date;

public class Venta {

	private int id_venta;
	private int id_cliente;
	private double montoFinal;
	private Date fecha; 
	private String forma_pago;
	private int descuento; // Va en double?
	
	public Venta(int id_cliente, double montoFinal, Date fecha, String forma_pago, int descuento) {
		this.id_cliente = id_cliente;
		this.montoFinal = montoFinal;
		this.fecha = fecha;
		this.forma_pago = forma_pago;
		this.descuento = descuento;
	}

	public Venta(int id_venta, int id_cliente, double montoFinal, Date fecha, String forma_pago, int descuento) {
		this.id_venta = id_venta;
		this.id_cliente = id_cliente;
		this.montoFinal = montoFinal;
		this.fecha = fecha;
		this.forma_pago = forma_pago;
		this.descuento = descuento;
	}

	public int getId_venta() {
		return id_venta;
	}

	public void setId_venta(int id_venta) {
		this.id_venta = id_venta;
	}

	public int getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	public double getMontoFinal() {
		return montoFinal;
	}

	public void setMontoFinal(double montoFinal) {
		this.montoFinal = montoFinal;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getForma_pago() {
		return forma_pago;
	}

	public void setForma_pago(String forma_pago) {
		this.forma_pago = forma_pago;
	}

	public int getDescuento() {
		return descuento;
	}

	public void setDescuento(int descuento) {
		this.descuento = descuento;
	}

	@Override
	public String toString() {
		return "Venta [id_venta=" + id_venta + ", id_cliente=" + id_cliente + ", montoFinal=" + montoFinal + ", fecha="
				+ fecha + ", forma_pago=" + forma_pago + ", descuento=" + descuento + "]";
	}
	
	
	
}
