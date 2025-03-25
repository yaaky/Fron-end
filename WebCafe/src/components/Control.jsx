import React, {useEffect, useState, } from 'react'
 import tareas from '../services/productos';
 import Swal from "sweetalert2"

 
 function Control() {
   const [PoductoAgregado,SetPoductoAgregado]=useState()
   const [TareasT, SetTarea]=useState([])
 
   let Usuario = JSON.parse(localStorage.getItem("medio"))  
 
   let Text = "";
   
   useEffect(()=>{
     async function fetchDataproductos() {
         const datos = await tareas.GetProductos()
         SetTarea(datos)
 
     };
     fetchDataproductos();
 
   },[]);
   
 
   function Tarea(evento) {
     SetPoductoAgregado(evento.target.value)
 
   }
 
 function btnProduct(){
 
   if(PoductoAgregado==undefined) {
     Swal.fire({
       icon: 'info',
       title: 'Porfavor, escriba una tarea',
     });
   }
 
   else {
     tareas.PostProductos(Usuario,PoductoAgregado)
     console.log("Tarea enviada correctamente");
     setTimeout(() => {
       location.reload()
     }, 300);
 
   }
 }
 
 function btnEliminar(id) {
   tareas.DeleteProductos(id)
   setTimeout(() => {
     location.reload()
   }, 300);
 }
 
 async function btnEditar(tarea,id) {
 
   
   const { value: text } = await Swal.fire({
     input: "textarea",
     inputLabel: "Editar tarea",
     inputValue: tarea,
     inputAttributes: {
       "aria-label": "Escribe tu nueva tarea"
     },
     showCancelButton: true,
     confirmButtonText: "Actualizar", 
     cancelButtonText: "Cancelar" 
   });
 
   if (text) {
     Swal.fire({
       icon: 'success',
       title: 'Tarea actualizada',
       showConfirmButton: false
     });
 
     let estado = "pendiente"
 
     Text = text;
 
     tareas.UpdateProductos(Usuario,text,estado,id)
     setTimeout(() => {
       location.reload()
     }, 300);
 
   }
 
 }
 
 function checkbox(tarea,id){
   let estado = "completada"
   tareas.UpdateProductos(Usuario,tarea,estado,id)
   setTimeout(() => {
     location.reload()
   }, 300);
 
 }
 
 
   return (
   <main>
     <div className='nombre'>
       <p className='User'>Bienvenido, {Usuario} </p>
 
     </div>
 
     <div className='agtarea'>
       
       <label >Agregar Tarea</label><br /><br />
       <input type="text" value={PoductoAgregado} onChange={Tarea} placeholder='Agreagar una Tarea' /><br /><br />
       <button onClick={btnProduct}>Push</button>
     </div>
 
     <section className='ContTareas'>
 
       {TareasT.filter(TAREA => TAREA.estado == "pendiente").map((TAREA, index) => (
 
 
         <div key={index} className='DIVTarea'>
           
           <p className='pNombre' >Nombre: {TAREA.nombre}</p>
           
           <p className='pTarea'> Tarea: {TAREA.tarea}</p>
           <button onClick={e => btnEliminar(TAREA.id)} >Eliminar</button>
           <button onClick={e => btnEditar(TAREA.tarea,TAREA.id)} >Editar</button>
           <input type='checkbox' onClick={e => checkbox(TAREA.tarea,TAREA.id)} />
         </div>
       ))}
     </section>
   </main>
 
     
   )
 }
 
 export default Control
