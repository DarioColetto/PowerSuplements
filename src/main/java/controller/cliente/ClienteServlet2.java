package controller.cliente;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import com.google.gson.Gson;

import dao.ClienteDao;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Cliente;

/**
 * Servlet implementation class ClienteServlet2
 */
@WebServlet(
		name = "Cliente Servlet",
		description = "Get all Clientes"
		)
public class ClienteServlet2 extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
	
	
	
  

  // GET all clientes
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
	  
	  ClienteDao clienteDao;
	  ArrayList<Cliente> clientes;
	  Gson gson = new Gson();
	  
	  try {
		
		  clienteDao = new ClienteDao();
		  clientes = clienteDao.buscar_todos();
		  
		  String json = gson.toJson(clientes);
		  response.setContentType("application/json");
		  
		  response.getWriter().println(json);
	} 
	  
	  catch (SQLException e) {
		
		e.printStackTrace();
	}
	  
	  System.out.println("Path: " + request.getContextPath());
	  System.out.println("URL: " + request.getRequestURI());
	  
  }

  // GET a single cliente by ID
  protected void doGet(HttpServletRequest request, HttpServletResponse response, int clienteId) throws IOException {

  }

  // CREATE a new cliente
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

  }

  // UPDATE an existing cliente by ID
  protected void doPut(HttpServletRequest request, HttpServletResponse response, int clienteId) throws IOException {

  }
  // DELETE an existing cliente by ID
  protected void doDelete(HttpServletRequest request, HttpServletResponse response, int clienteId) throws IOException {

  }
}
