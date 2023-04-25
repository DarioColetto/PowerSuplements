package controller;

import java.io.IOException;
import java.sql.SQLException;

import com.google.gson.Gson;

import dao.ProductoDao;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(
		name = "ProductoServlet",
		description = "Controller of Producto Http request methods",
		urlPatterns = {"/producto"})
public class ProductoController extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public ProductoController() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
	
		//System.out.println(request.getPathInfo());
		//System.out.println(request.getContextPath());
		//System.out.println(request.getRequestURI());
		
		Gson gson = new Gson();
		String json;
		
		ProductoDao productoDao;
		try {
			
			productoDao = new ProductoDao();
			
			json = gson.toJson(productoDao.buscar_todos());
			
			
			System.out.println(json);
			//response.getWriter().append(json);
		    response.setContentType("application/json");
		    response.getWriter().println(json);
			
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
