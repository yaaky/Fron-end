import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/ins.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import{Link} from "react-router-dom"

function Inis() {
  return (
    <div>
      <div className='cont'>
      
        <div className='header'>
          <h1>Sabor de Costa Rica</h1>
          <img src="Cream and Brown Minimalist Coffee Shop Logo (1).png" alt=""  />
        </div>

        <div id='prueba'>
          <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel"    >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/landscape-nature-water-1284296.jpg" className="d-block w-100" alt="Nature"   height={500}/>
              </div>
              <div className="carousel-item">
                <img src="caf 1.jpg" className="d-block w-100" alt="Costa Rica"   height={500}/>
              </div>
              <div className="carousel-item">
                <img src="cafe.jpg" className="d-block w-100" alt="Costa Rica"  height={500}/>
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
    </div>
  );
}

export default Inis;
