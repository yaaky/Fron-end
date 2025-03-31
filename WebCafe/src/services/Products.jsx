import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pro.css';
import 'boxicons';
import productos from './productos';
import Swal from 'sweetalert2';

function Products() {
  const [Productos, setProductos] = useState([]);
  const [base64Image, setBase64Image] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [categoriaProducto, setCategoriaProducto] = useState('');

  // Cargar los productos desde el backend
  useEffect(() => {
    async function fetchDataUsers() {
      const datos = await productos.GetProductos();
      setProductos(datos);
    }
    fetchDataUsers();
  }, []);

  // Manejo de carga de imagen
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result); // Convertir imagen a Base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Validar los campos antes de enviar el producto
  const validateAndPost = async () => {
    // Validación de los campos
    if (!nombreProducto.trim() || !categoriaProducto.trim()) {
      // Mostrar alerta si algún campo está vacío o tiene solo espacios
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, llena todos los campos antes de enviar.',
      });
      return;
    }

    // Enviar nuevo producto al backend si la validación pasa
    const body = {
      imagen: base64Image, // Imagen en Base64
      nombre: nombreProducto,
      categoria: categoriaProducto,
    };

    try {
      const response = await fetch("http://localhost:3000/productos", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Después de agregar, actualizamos la lista de productos
      setProductos([...Productos, data]); // Suponiendo que el servidor devuelve el nuevo producto
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Filtramos el producto eliminado de la lista local
        setProductos(Productos.filter((producto) => producto.id !== id));
      } else {
        console.error('Error al eliminar el producto');
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <div>
      <div className='bod'>
        <div className='header1'>
          <h1>Sabor de Costa Rica</h1>
          <img src='Cream and Brown Minimalist Coffee Shop Logo (1).png' alt='' />
        </div>
        <br />
        <div className='flech'>
          <ul className='u'>
            <li>
              <Link to='/Home'>
                <box-icon name='rocket'></box-icon>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mostrar los productos con opción de eliminar */}
        <div className='container'>
          {Productos.map((PRODUCT, index) => (
            <div key={index} className='image-container'>
              <p>{PRODUCT.nombre}</p>
              <p>{PRODUCT.categoria}</p>
              {PRODUCT.imagen && (
                <img src={PRODUCT.imagen} alt={PRODUCT.nombre} style={{ width: '100px', height: '100px' }} />
              )}
              {/* Botón para eliminar producto */}
              <button onClick={() => deleteProduct(PRODUCT.id)}>Eliminar</button>
            </div>
          ))}
        </div>

        <br />
        <div>
          <h2>Agregar Producto</h2>
          <input
            type='text'
            placeholder='Nombre del Producto'
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
          /> <br/>
          <input
            type='text'
            placeholder='Categoría del Producto'
            value={categoriaProducto}
            onChange={(e) => setCategoriaProducto(e.target.value)}
          /><br/>
          <input type='file' onChange={handleFileChange} /><br/><br/>
          <button onClick={validateAndPost}>Enviar Producto</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
