package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

import com.google.gson.Gson;

import dao.ClienteDao;


/**
 * Servlet implementation class ClienteController
 */
@WebServlet(
		name = "ClienteServlet",
		description = "Controller of Cliente Http request methods",
		urlPatterns = {"/cliente"})
public class ClienteController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClienteController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	
		System.out.println(request.getPathInfo());
		System.out.println(request.getContextPath());
		System.out.println(request.getRequestURI());
		
		Gson gson = new Gson();
		String json;
		
		ClienteDao clienteDao;
		try {
			
			clienteDao = new ClienteDao();
			
			json = gson.toJson(clienteDao.buscar_todos());
			
			
			System.out.println(json);
			response.getWriter().append(json);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
