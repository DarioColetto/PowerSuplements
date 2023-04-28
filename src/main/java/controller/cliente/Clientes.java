package controller.cliente;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import dao.ClienteDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cliente;

/**
 * Servlet implementation class ClienteServlet2
 */
@WebServlet(name = "ClienteServlet", description = "Get all Clientes", urlPatterns = "/clientes/*"

)
public class Clientes extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private Gson gson;
	String json;
	ClienteDao clienteDao;

	@Override
	public void init() throws ServletException {

		gson = new Gson();
		try {

			clienteDao = new ClienteDao();

		} catch (SQLException e) {

			e.printStackTrace();
		}
	}

	
	protected void service(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
   
		String method = request.getMethod();
		
		if (method.equals("GET") ){
				
				doGet(request, response);} 
			
		else if (method.equals("POST")) {
			
			doPost(request, response);} 
		
		else if (method.equals("PUT")) {
			
			doPut(request, response);}
		
		else if (method.equals("DELETE")) {
				
				doDelete(request, response);
			
	   } else {
	    // Servlet doesn't currently support 
	    // other types of request.
	    String errMsg = "Method Not Supported";
	    response.sendError(
	      HttpServletResponse.SC_NOT_IMPLEMENTED, errMsg);
	   }
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String pathInfo = request.getPathInfo();

		// Uncomment to chek pathInfo
		System.out.println(pathInfo);

		if (pathInfo == null || pathInfo.equals("/")) {
			// Get all clientes

			try {

				List<Cliente> clientes = clienteDao.getAll();

				System.out.println(clientes);

				json = gson.toJson(clientes);

				System.out.println(json);
				// response.getWriter().append(json);
				response.setContentType("application/json");
				response.getWriter().println(json);

				// request.setAttribute("clientes", clientes);
				// request.getRequestDispatcher("/WEB-INF/views/clientes.jsp").forward(request,
				// response);

			} catch (SQLException e) {

				e.printStackTrace();
			}

		} else {

			int id = Integer.parseInt(request.getParameter("id"));
			String nombre = request.getParameter("nombre");

			System.out.println("Parametros: " + id + ", " + nombre);

			Cliente cliente;

			try {

				clienteDao = new ClienteDao();

				System.out.println("Get ONe");

				cliente = clienteDao.getById(id);

				System.out.println(cliente.toString());

			} catch (SQLException e) {

				e.printStackTrace();
			}
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String pathInfo = request.getPathInfo();

		response.setContentType("application/json");

		Cliente cliente;

		if (pathInfo == null || pathInfo.equals("/")) {

			// Lee la respuesta
			BufferedReader reader = request.getReader();
			// Convierte la respuesta JSON
			JsonObject json = gson.fromJson(reader, JsonObject.class);

			// Obtiene los claves y los valores
			String nombre = json.get("nombre").getAsString();
			String telefono = json.get("telefono").getAsString();
			String direccion = json.get("direccion").getAsString();
			String email = json.get("email").getAsString();

			cliente = new Cliente(nombre, telefono, direccion, email);

			// TODO agregar el dao

			// Control de salida por consola de los valores obtenidos
			System.out.println(cliente.toString());

			// Respuesta de control
			response.getWriter().append("Cliente creado");

		} else {
			response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
		}
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String pathInfo = request.getPathInfo();
		response.setContentType("application/json");
		Cliente cliente;

		if (pathInfo != null && !pathInfo.equals("/")) {

			// Lee la respuesta
			BufferedReader reader = request.getReader();
			// Convierte la respuesta JSON
			JsonObject json = gson.fromJson(reader, JsonObject.class);

			// Obtiene los claves y los valores
			int id = json.get("id").getAsInt();
			String nombre = json.get("nombre").getAsString();
			String telefono = json.get("telefono").getAsString();
			String direccion = json.get("direccion").getAsString();
			String email = json.get("email").getAsString();

			cliente = new Cliente(id, nombre, telefono, direccion, email);

			// TODO agregar el dao

			// Control de salida por consola de los valores obtenidos
			System.out.println(cliente.toString());

			// Respuesta de control
			response.getWriter().append("Cliente creado");

		}
	}


	  @Override protected void doDelete(HttpServletRequest request,HttpServletResponse response) 
			  throws ServletException, IOException { String
	 
		  pathInfo = request.getPathInfo(); 
			  
			  if (pathInfo != null && !pathInfo.equals("/")) { 
				  
				  // Delete an existing cliente by ID String[]
				  
				  int id = Integer.parseInt(request.getParameter("id"));
	  
				  try {
					  
					  response.getWriter().append("Cliente: " + id + " deleted");
					  //clienteDao.delete(id);
				  }
				  catch (Exception e) {
					  
					  response.sendError(HttpServletResponse.SC_NOT_FOUND); 
				}
		  
	  
	  
			  }
	  }
	 
}
