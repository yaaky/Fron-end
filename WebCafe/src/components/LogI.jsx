import React, {useState, useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import llamados from '../services/llamados';
import "../styles/login.css"



function LogI() {

    const [nombreUsuario, setNombreUsuario]=useState()
    const [passwordUsuario, setPasswordUsuario]=useState()
    const [usuario,setUsuario]=useState()


    const navigate = useNavigate()

     useEffect(()=>{
        async function fetchDataUsers() {
            const datos = await llamados.GetUsers()
            setUsuario(datos)

          
        };
        fetchDataUsers();

     },[]);







function nombre(evento) {
    setNombreUsuario(evento.target.value)
}
function password(evento) {
    setPasswordUsuario(evento.target.value)
}

function password(evento) {
    setPasswordUsuario(evento.target.value)
}

function validar () {
    const encontrado = usuario.filter (usuario => usuario.nombre === nombreUsuario && usuario.password===passwordUsuario)
    if(encontrado.length == 0){
        console.log("usuario o contraseña incorrectas")
    }else{
        localStorage.setItem("Usuario",JSON.stringify(nombreUsuario));
        
        navigate('/home')
    }
}

  return (
    <div className='body'>

     <div className='log'>
     <h1>Login</h1><br />
     <label htmlFor="">Nombre: </label>
     <input type="text"  value={nombreUsuario} onChange={nombre}/><br /><br />
     <label htmlFor="">Contraseña: </label>
     <input type="text" value={passwordUsuario} onChange={password}/><br /><br />
     <p> ¿No tines una Cuenta? <Link to="/register" className='btnCambiar'>Registrarme</Link></p>
     <button onClick={validar}>Push</button>
     </div>

    </div> 
  )
}
export default LogI