import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pro.css';
import 'boxicons';
import productos from '../services/productos';

function Products() {
  const [Productos, setProductos] = useState([]);
  const [base64Image, setBase64Image] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [categoriaProducto, setCategoriaProducto] = useState('');

  useEffect(() => {
    async function fetchDataUsers() {
      const datos = await productos.GetProductos();
      setProductos(datos);
    }
    fetchDataUsers();
  }, []);

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

  const postToEndpoint = async () => {
    const body = {
      imagen: base64Image, // Imagen en Base64
      nombre: nombreProducto,
      categoria: categoriaProducto,
    };

    try {
      const response = await fetch('https://tu-endpoint.com/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
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

        <div className='container'>
          {Productos.map((PRODUCT, index) => (
            <div key={index} className='image-container'>
              <p>{PRODUCT.nombre}</p>
              <p>{PRODUCT.categoria}</p>
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
          />
          <input
            type='text'
            placeholder='Categoría del Producto'
            value={categoriaProducto}
            onChange={(e) => setCategoriaProducto(e.target.value)}
          />
          <input type='file' onChange={handleFileChange} />
          <button onClick={postToEndpoint}>Enviar Producto</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
