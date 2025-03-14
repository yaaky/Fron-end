import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Proncii from '../pages/Proncii'

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

           
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/inicio" element={<Proncii/>}/>
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
