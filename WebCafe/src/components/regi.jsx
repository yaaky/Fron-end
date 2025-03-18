import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import llamados from '../services/llamados';
import "../styles/registro.css"


 function Regi() {

 const [nombreUsuario, setNombreUsuario]=useState()
 const [emailUsuario, setEmailUsuario]=useState()
 const [passwordUsuario, setPasswordUsuario]=useState()

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
}
  return (
    <div>

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
  )
}
export default Regi
