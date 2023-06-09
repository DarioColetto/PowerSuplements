
let productos = [
  {
    "id_producto": 1,
    "nombre": "Smartphone",
    "precio": 599.99,
    "categoria": "Electronics",
    "descripcion": "A high-end smartphone with a large display and great camera.",
    "foto": "https://example.com/images/smartphone.jpg",
    "stock": 3,
    "proveedor": "Samsung"
  },
  {
    "id_producto": 2,
    "nombre": "Laptop",
    "precio": 1299.99,
    "categoria": "Electronics",
    "descripcion": "A powerful laptop with a sleek design and long battery life.",
    "foto": "https://example.com/images/laptop.jpg",
    "stock": 4,
    "proveedor": "Apple"
  },
  {
    "id_producto": 3,
    "nombre": "Running Shoes",
    "precio": 99.99,
    "categoria": "Sports",
    "descripcion": "Comfortable running shoes with good traction and support.",
    "foto": "https://example.com/images/running-shoes.jpg",
    "stock": 2,
    "proveedor": "Nike"
  }
]

let clientes = [
  {
    "id_cliente": 1,
    "nombre": "John Smith",
    "telefono": "555-1234",
    "direccion": "123 Main St",
    "email": "john.smith@example.com"
  },
  {
    "id_cliente": 2,
    "nombre": "Jane Doe",
    "telefono": "555-5678",
    "direccion": "456 Oak St",
    "email": "jane.doe@example.com"
  },
  {
    "id_cliente": 3,
    "nombre": "Bob Johnson",
    "telefono": "555-9012",
    "direccion": "789 Elm St",
    "email": "bob.johnson@example.com"
  }
]

let proveedores = [
  {
    "id_proveedor": 1,
    "nombre": "John Smith",
    "telefono": "555-1234",
    "direccion": "123 Main St",
    "email": "john.smith@example.com"
  },
  {
    "id_proveedor": 2,
    "nombre": "Jane Doe",
    "telefono": "555-5678",
    "direccion": "456 Oak St",
    "email": "jane.doe@example.com"
  },
  {
    "id_proveedor": 3,
    "nombre": "Bob Johnson",
    "telefono": "555-9012",
    "direccion": "789 Elm St",
    "email": "bob.johnson@example.com"
  }
]

const compras = [

  {
    "id_venta": 1,
    "id_cliente": 1,
    "total": 45.5,
    "fecha": "2023-04-12",
    "detalle": [
      { "nombre": 'Whey Protein', "precio": 40.5, "cantidad": 1 , "subtotal":40.5},
      { "nombre": 'Barrita', "precio": 10.5, "cantidad": 1,"subtotal":10.5 }
    ]
  },
  {
    "id_venta": 2,
    "id_cliente": 2,
    "total": 30.0,
    "fecha": "2023-04-12",
    "detalle": [
      { "nombre": 'Bcca', "precio": 10.0, "cantidad": 2, "subtotal":20 },
      { "nombre": 'Viraminas', "precio": 10.0, "cantidad": 1, "subtotal":10 }
    ]
  }

]

export { productos, clientes, proveedores, compras }