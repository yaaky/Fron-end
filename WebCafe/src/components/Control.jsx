import React, { useEffect, useState } from 'react';
import producto from '../services/productos';
import Swal from "sweetalert2";

function Control() {
  const [productoAgregado, setProductoAgregado] = useState('');
  const [productoT, setproducto] = useState([]);
  const [categoria, setCategoria] = useState(''); // Estado para manejar la selección de categoría

  let usuario = JSON.parse(localStorage.getItem("Usuario"));
  console.log(usuario);

  useEffect(() => {
    async function fetchDataProductos() {
      const datos = await producto.GetProductos();
      console.log(datos)
      setproducto(datos);

    }
    fetchDataProductos();
  }, []);

  // Maneja el cambio en el campo de producto
  function handleproductoChange(event) {
    setProductoAgregado(event.target.value);
  }

  // Maneja el cambio en la categoría seleccionada
  function handleCategoriaChange(event) {
    setCategoria(event.target.value);
  }

  // Función para agregar un producto
  async function handleAddProduct() {
    if (!productoAgregado || !categoria) {
      Swal.fire({
        icon: 'info',
        title: 'Por favor, complete todos los campos',
      });
    } else {
      await producto.PostProductos(usuario, productoAgregado, categoria);
      console.log("Producto enviado correctamente");
      setTimeout(() => {
        location.reload(); // Recarga para mostrar la nueva producto agregada
      }, 300);
    }
  }

  // Función para eliminar una producto
  function handleDelete(id) {
    producto.DeleteProductos(id);
    setTimeout(() => {
      location.reload(); // Recarga después de eliminar la producto
    }, 300);
  }

  // Función para editar una producto
  async function handleEdit(product, id) {
    const { value: formValues } = await Swal.fire({
      title: "Multiple inputs",
      html: `
        <input id="nombre" class="swal2-input"/>
        <select class="swal2-select" name="categoria" id="categoriaEdit">
          <option value="">categoria del cafe</option>
          <option value="Alta"> Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      `,
      focusConfirm: false,
      preConfirm: () => {

        let NombreEdit = document.getElementById("nombre").value
        let CategoriaEdit = document.getElementById("categoriaEdit").value

        return [
          NombreEdit,
          CategoriaEdit
        ];
      }
    });
    if (formValues) {
      // Swal.fire(JSON.stringify(formValues));
      const [NombreEdit, CategoriaEdit] = formValues;

      let estado = "pendiente";

      producto.UpdateProductos(usuario, NombreEdit, estado, CategoriaEdit, id);
      setTimeout(() => {
        location.reload();
      }, 300);

    }
  }



  // Función para marcar una producto como completada
  function handleCheckbox(product, id) {
    let estado = "completada";
    producto.UpdateProductos(usuario, product, estado, id);
    setTimeout(() => {
      location.reload();
    }, 300);
  }

  return (
    <main>
      <div className='nombre'>
        <p className='User'>Bienvenidos, {usuario} </p>
      </div>
      <div className='agproducto'>
        <label>Agregar producto</label><br /><br />
        {/* Agregar un selector de categoría */}
        <select value={categoria} onChange={handleCategoriaChange} name="categoria" id="categoria">
          <option value="">categoria del cafe</option>
          <option value="Alta"> Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select><br /><br />
        <input
          type="text"
          value={productoAgregado}
          onChange={handleproductoChange}
          placeholder='Agregar una producto'
        /><br /><br />
        <button onClick={handleAddProduct}>Agregar</button>
      </div>
      <section className='Contproducto'>
        {productoT.map((producto, index) => (
          <div key={index} className='DIVproducto'>
            <p className='pNombre'>Nombre: {producto.nombre}</p>
            <p className='pproducto'>producto: {producto.producto}</p>
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
            <button onClick={() => handleEdit(producto.producto, producto.id)}>Editar</button>
            <input type='checkbox' onClick={() => handleCheckbox(producto.producto, producto.id)} /> Marcar como completada
          </div>
        ))}
      </section>
    </main>
  );
}

export default Control;

