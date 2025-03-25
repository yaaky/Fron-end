import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/pro.css";
import 'boxicons'
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

 function Products() {
  return (
    <div> 
      <div className='bod'>
      <div className='header1'>
          <h1>Sabor de Costa Rica</h1>
          <img src="Cream and Brown Minimalist Coffee Shop Logo (1).png" alt="" />
        </div><br/>

        <div className='flech'>
 <ul className='u'>
  <li><Link to="/Home" ><box-icon name="rocket"> </box-icon></Link></li>


  </ul>
 </div>
       
  <div class="container">
   
    <div class="image-container">
      <img src="s3.jpg" alt="Imagen 1" class="image"/>
      <p class="image-text">Texto de la imagen 1</p>
    </div>

 
    <div class="image-container">
      <img src="s3.jpg" alt="Imagen 2" class="image"/>
      <p class="image-text">Texto de la imagen 2</p>
    </div>

   
    <div class="image-container">
      <img src="s3.jpg" alt="Imagen 3" class="image"/>
      <p class="image-text">Texto de la imagen 3</p>
    </div>

    <div class="image-container">
      <img src="s3.jpg" alt="Imagen 3" class="image"/>
      <p class="image-text">Texto de la imagen 3</p>
    </div>
  </div><br />
  
 </div>
    </div>
  )
}
export default Products;