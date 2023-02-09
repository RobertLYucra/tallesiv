import {React,useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import axios from "axios";
import Login from "./pages/Login";
import Main from './pages/Main'
import Register  from "./pages/Register";
import InicioSesion from "./pages/InicioSesion";






function App() {

  return (
    <div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/InicioSesion" element={<InicioSesion/>}/>
          <Route path="/:id" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
