package controller.producto;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import dao.ProductoDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Producto;

/**
 * Servlet implementation class Producto
 */
@WebServlet(name = "ProductoServlet", description = "", urlPatterns = "/productos/*"

)
public class ProductoServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private Gson gson;
	String json;
	ProductoDao productoDao;

	@Override
	public void init() throws ServletException {

		gson = new Gson();
		try {

			productoDao = new ProductoDao();

		} catch (SQLException e) {

			e.printStackTrace();
		}
	}

	/**
	 * Refers to the corresponding method of the servlet: doGet, doPost, doPut, doDelete, according to the method of the request
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
   
		String method = request.getMethod();
		
		String pathInfo = request.getPathInfo();

		// Uncomment to chek pathInfo
		System.out.println(pathInfo);
		
		if (method.equals("GET") && (pathInfo == null || pathInfo.equals("/") )){
				
				doGet(request, response);
				
		}
		
		else if(method.equals("GET") && (pathInfo == null || pathInfo.equals("/getbyid") )) {
			
			doGetById(request, response);			
		}
		

		else if (method.equals("POST") && (pathInfo == null || pathInfo.equals("/") )) {
			
			doPost(request, response);
			
		} 
		
		else if (method.equals("PUT") && (pathInfo == null || pathInfo.equals("/") )) {
			
			doPut(request, response);
			
		}
		
		else if (method.equals("DELETE") && (pathInfo == null || pathInfo.equals("/") )) {
				
				doDelete(request, response);
			
	   } else {
	    // Servlet doesn't currently support 
	    // other types of request.
	    String errMsg = "Method Not Supported";
	    response.sendError(HttpServletResponse.SC_NOT_IMPLEMENTED, errMsg);
	   }
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {


			try {

				List<Producto> productos = productoDao.getAll();

				System.out.println(productos);

				json = gson.toJson(productos);

				System.out.println(json);
				// response.getWriter().append(json);
				response.setContentType("application/json");
				response.getWriter().println(json);

				// request.setAttribute("productos", productos);
				// request.getRequestDispatcher("/WEB-INF/views/productos.jsp").forward(request,
				// response);

			} catch (SQLException e) {

				e.printStackTrace();
			}
	}

	
	protected void doGetById(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
	
		int id = Integer.parseInt(request.getParameter("id"));
		String nombre = request.getParameter("nombre");

		System.out.println("Parametros: " + id + ", " + nombre);

		Producto producto;

		try {

			productoDao = new ProductoDao();

			System.out.println("Get ONe");

			producto = productoDao.getById(id);

			System.out.println(producto.toString());

		} catch (SQLException e) {

			e.printStackTrace();
		
		};
	}

	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	
		response.setContentType("application/json");

		Producto producto;

		try {

			// Lee la respuesta
			BufferedReader reader = request.getReader();
			// Convierte la respuesta JSON
			JsonObject json = gson.fromJson(reader, JsonObject.class);

			// Obtiene los claves y los valores
			String nombre = json.get("nombre").getAsString();
			double precio = json.get("precio").getAsDouble();
			String categoria = json.get("categoria").getAsString();
			String descripcion = json.get("descripcion").getAsString();
			String foto = json.get("foto").getAsString();
			int stock = json.get("stock").getAsInt();
			int id_proveedor = json.get("id_proveedor").getAsInt();

			producto = new Producto(nombre,precio, categoria,  descripcion,foto,stock, id_proveedor );

			// TODO agregar el dao

			// Control de salida por consola de los valores obtenidos
			System.out.println(producto.toString());

			// Respuesta de control
			response.getWriter().append("Producto creado");

		} catch(IOException e) {
			
			response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
		}
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {


		response.setContentType("application/json");
		Producto producto;

		try {

			// Lee la respuesta
			BufferedReader reader = request.getReader();
			// Convierte la respuesta JSON
			JsonObject json = gson.fromJson(reader, JsonObject.class);

			// Obtiene los claves y los valores
			String nombre = json.get("nombre").getAsString();
			double precio = json.get("precio").getAsDouble();
			String categoria = json.get("categoria").getAsString();
			String descripcion = json.get("descripcion").getAsString();
			String foto = json.get("foto").getAsString();
			int stock = json.get("stock").getAsInt();
			int id_proveedor = json.get("id_proveedor").getAsInt();

			producto = new Producto(nombre,precio, categoria,  descripcion,foto,stock, id_proveedor );

			// TODO agregar el dao

			// Control de salida por consola de los valores obtenidos
			System.out.println(producto.toString());

			// Respuesta de control
			response.getWriter().append("Producto creado");
			
		}catch(IOException e) {
			
			response.sendError(HttpServletResponse.SC_EXPECTATION_FAILED);
		}
		
	}

	  @Override protected void doDelete(HttpServletRequest request,HttpServletResponse response) 
			  throws ServletException, IOException { String
	 
		  pathInfo = request.getPathInfo(); 
			  
			  if (pathInfo != null && !pathInfo.equals("/")) { 
				  
				  // Delete an existing producto by ID String[]
				  
				  int id = Integer.parseInt(request.getParameter("id"));
	  
				  try {
					  
					  response.getWriter().append("Producto: " + id + " deleted");
					  //productoDao.delete(id);
				  }
				  catch (Exception e) {
					  
					  response.sendError(HttpServletResponse.SC_NOT_FOUND); 
				}
			  }
	  }

}
