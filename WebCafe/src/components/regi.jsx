import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import llamados from '../services/llamados';
import "../styles/registro.css"



 function Regi() {

  const [nombreUsuario, setNombreUsuario]=useState()
  const [emailUsuario, setEmailUsuario]=useState()
  const [passwordUsuario, setPasswordUsuario]=useState()

  let navigate = useNavigate()

  function nombre(evento) {
      setNombreUsuario(evento.target.value)
  }
  function email(evento) {
      setEmailUsuario(evento.target.value)
  }

  function password(evento) {
      setPasswordUsuario(evento.target.value)
  }

  function cargar() {
    llamados.PostUsers(nombreUsuario, emailUsuario,passwordUsuario, "user")
    navigate("/login")
  }

  return (
    <div>
      
      <div className='conte'>
      <div className='pa'>
      <div className='header'>
          <h1>Sabor de Costa Rica</h1>
          <img src="Cream and Brown Minimalist Coffee Shop Logo (1).png" alt=""  />
        </div>
        <div className='central'>
          <div className='con'>
        <div className='bl'>
            <h1>Forma parte de Nosotros!</h1>
            <p>Te invitamos a formar parte de nuestra familia, y ademas a ayudar a expandirnos y que mas personas sepan a que nos dedicamos , ayudando asi a mas personas y sonas cafetaleras de nuestro pais.</p>
          </div>
          <img src="caf 2.avif" alt="" />

          </div>
        </div>

          
        <div className='menu'>
          <ul >
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/registro">Register</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
          </div>
        </div>
        













      <div className='reg'>
        <h1>Register</h1><br />
        <label htmlFor="">Nombre: </label>
        <input type="text" value={nombreUsuario} onChange={nombre}/><br /><br />
        <label htmlFor="">CorreoElectronico: </label>
        <input type="text" value={emailUsuario} onChange={email} /><br /><br />
        <label htmlFor="">Contraseña: </label>
        <input type="text" value={passwordUsuario} onChange={password}/><br /><br />
        <p> ¿Ya tienes una Cuenta? <Link className='btnCambiar' to="/login">Logeate</Link></p>
        <button onClick={cargar}>Push</button>
      </div>
      
      </div>
      

    </div>
  )
}
export default Regi
