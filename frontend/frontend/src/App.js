import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
/*import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listar from './components/Listar';
function App() {
  return(
    <div className='container-fluid'>
      <div className='container_personalizado'>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Listar" element={<Listar />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;

