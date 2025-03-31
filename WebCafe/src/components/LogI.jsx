import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamados from '../services/llamados';
import "../styles/login.css";


function LogI() {
    const [nombreUsuario, setNombreUsuario] = useState();
    const [passwordUsuario, setPasswordUsuario] = useState();
    const [usuario, setUsuario] = useState();
    const [imagenIndex, setImagenIndex] = useState(0); // Estado para el índice de la imagen
    const imagenes = [
        "c3.avif", // Cambia por las rutas reales de tus imágenes
        "c1.jpg",
        "c2.png",
        "c5.png"
    ];

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDataUsers() {
            const datos = await llamados.GetUsers();
            setUsuario(datos);
        }
        fetchDataUsers();

        // Configurar intervalo para mover las imágenes cada 3 segundos
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000);

        // Limpiar intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    function nombre(evento) {
        setNombreUsuario(evento.target.value);
    }

    function password(evento) {
        setPasswordUsuario(evento.target.value);
    }

    function validar() {
        let encontrado = usuario.find(User => User.nombre === nombreUsuario && User.password === passwordUsuario);

        if (!encontrado) {
            console.log("Usuario o contraseña incorrecta, por favor intente de nuevo");
            return;
        }

        if (encontrado.tipuser === "admin") {
            console.log(encontrado);
            localStorage.setItem("Usuario", JSON.stringify(nombreUsuario));
            navigate('/admin');
        } else if (encontrado.tipuser === "user") {
            localStorage.setItem("Usuario", JSON.stringify(nombreUsuario));
            navigate('/Home');
        } else {
            console.log("Tipo de usuario no reconocido");
        }
    }

    return (
        <div className='body'>
            <div className='cont2'>
                <div className='header'>
                    <h1>Sabor de Costa Rica</h1>
                    <img src="Cream and Brown Minimalist Coffee Shop Logo (1).png" alt="" />
                </div>
                
                {/* Carrusel de imágenes */}
                <div className="imagen-carrusel">
                    <img src={imagenes[imagenIndex]} alt="Carrusel" className="imagen" />
                </div>

                <div className='menu'>
                    <ul>
                        <li><Link to="/inicio">Inicio</Link></li>
                        <li><Link to="/registro">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>

            <div className='log'>
                <h1>Login</h1><br />
                <label htmlFor="">Nombre: </label>
                <input type="text" value={nombreUsuario} onChange={nombre} /><br /><br />
                <label htmlFor="">Contraseña: </label>
                <input type="text" value={passwordUsuario} onChange={password} /><br /><br />
                <p> ¿No tienes una Cuenta? <Link to="/registro" className='btnCambiar'>Registrate</Link></p>
                <button onClick={validar}>Push</button>
            </div>
        </div>
    );
}

export default LogI;
