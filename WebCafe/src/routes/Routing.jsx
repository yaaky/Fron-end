import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Casa from '../pages/Casa'
import Proncii from '../pages/Proncii'
import Ad from '../pages/Ad'
import Pro from '../pages/Pro'
function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

           
            <Route path="/login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
           
            <Route path="/Home" element={<Casa/>}/>
            <Route path="/inicio" element={<Proncii/>}/>
            <Route path="/admin" element={<Ad/>}/>
            <Route path="/pro" element={<Pro/>}/>
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
