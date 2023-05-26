package model;

/**
 * Represents a product.
 */
public class Producto {

	private int id_producto;
	private String nombre;
	private double precio;
	private String categoria;
	private String descripcion;
	private String foto;
	private int stock;
	private int id_proveedor;

	/**
	 * Constructor for creating a product without an ID.
	 *
	 * @param nombre       the name of the product
	 * @param precio       the price of the product
	 * @param categoria    the category of the product
	 * @param descripcion  the description of the product
	 * @param foto         the photo of the product
	 * @param stock        the stock quantity of the product
	 * @param id_proveedor the ID of the product's supplier
	 */
	public Producto(String nombre, double precio, String categoria, String descripcion, String foto, int stock,
			int id_proveedor) {
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.foto = foto;
		this.stock = stock;
		this.categoria = categoria;
		this.id_proveedor = id_proveedor;
	}

	/**
	 * Constructor for creating a product with an ID.
	 *
	 * @param id_producto  the ID of the product
	 * @param nombre       the name of the product
	 * @param precio       the price of the product
	 * @param categoria    the category of the product
	 * @param descripcion  the description of the product
	 * @param foto         the photo of the product
	 * @param stock        the stock quantity of the product
	 * @param id_proveedor the ID of the product's supplier
	 */
	public Producto(int id_producto, String nombre, double precio, String categoria, String descripcion, String foto,
			int stock, int id_proveedor) {
		this.id_producto = id_producto;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.foto = foto;
		this.stock = stock;
		this.categoria = categoria;
		this.id_proveedor = id_proveedor;
	}

	/**
	 * Returns the ID of the product.
	 *
	 * @return the ID of the product
	 */
	public int getId_producto() {
		return id_producto;
	}

	/**
	 * Sets the ID of the product.
	 *
	 * @param id_producto the ID of the product
	 */
	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
	}

	/**
	 * Returns the name of the product.
	 *
	 * @return the name of the product
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * Sets the name of the product.
	 *
	 * @param nombre the name of the product
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * Returns the price of the product.
	 *
	 * @return the price of the product
	 */
	public double getPrecio() {
		return precio;
	}

	/**
	 * Sets the price of the product.
	 *
	 * @param precio the price of the product
	 */
	public void setPrecio(double precio) {
		this.precio = precio;
	}

	/**
	 * Returns the description of the product.
	 *
	 * @return the description of the product
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * Sets the description of the product.
	 *
	 * @param descripcion the description of the product
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	/**
	 * Returns the photo of the product.
	 *
	 * @return the photo of the product
	 */
	public String getFoto() {
		return foto;
	}

	/**
	 * Sets the photo of the product.
	 *
	 * @param foto the photo of the product
	 */
	public void setFoto(String foto) {
		this.foto = foto;
	}

	/**
	 * Returns the stock quantity of the product.
	 *
	 * @return the stock quantity of the product
	 */
	public int getStock() {
		return stock;
	}

	/**
	 * Sets the stock quantity of the product.
	 *
	 * @param stock the stock quantity of the product
	 */
	public void setStock(int stock) {
		this.stock = stock;
	}

	/**
	 * Returns the category of the product.
	 *
	 * @return the category of the product
	 */
	public String getCategoria() {
		return categoria;
	}

	/**
	 * Sets the category of the product.
	 *
	 * @param categoria the category of the product
	 */
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	/**
	 * Returns the ID of the product's supplier.
	 *
	 * @return the ID of the product's supplier
	 */
	public int getId_proveedor() {
		return id_proveedor;
	}

	/**
	 * Sets the ID of the product's supplier.
	 *
	 * @param id_proveedor the ID of the product's supplier
	 */
	public void setId_proveedor(int id_proveedor) {
		this.id_proveedor = id_proveedor;
	}

	@Override
	public String toString() {
		return "Producto [id_producto=" + id_producto + ", nombre=" + nombre + ", precio=" + precio + ", categoria="
				+ categoria + ", descripcion=" + descripcion + ", foto=" + foto + ", stock=" + stock + ", id_proveedor="
				+ id_proveedor + "]";
	}

}
