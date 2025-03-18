import React from 'react'
import{Link} from "react-router-dom"
import "../styles/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function home() {
  return (
    <div>
        
        <div className='cont'>
        <div className='header'>
          <h1>Sabor de Costa Rica</h1>
          <img src="Cream and Brown Minimalist Coffee Shop Logo (1).png" alt="" />
        </div>

        <div className="container my-4">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/cf2.jpg" className="d-block w-100" alt="Nature" />
              </div>
              <div className="carousel-item">
                <img src="cf3.jpg" className="d-block w-100" alt="Costa Rica" />
              </div>
              <div className="carousel-item">
                <img src="cf5.jpg" className="d-block w-100" alt="Costa Rica" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
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

        <div className="contenedor" >
            <div className='itemCard'>
                <h1>hola</h1>
                <img src="asociasion.jpg" alt="" />
                <button>Ver mas</button>
            </div>

            <div className='itemCard'>
                <h1>hola</h1>
                <img src="asociasion.jpg" alt="" />
                <button>Ver mas</button>
            </div>

            <div className='itemCard'>
                <h1>hola</h1>
                <img src="asociasion.jpg" alt="" />
                <button>Ver mas</button>
            </div>

            <div className='itemCard'>
                <h1>hola</h1>
                <img src="asociasion.jpg" alt="" />
                <button>Ver mas</button>
            </div>
        </div>

    </div>


   
  )
}

export default home
