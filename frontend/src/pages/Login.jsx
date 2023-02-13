import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import loginImg from '../pages/images/login.jpg'
import logoImg from '../pages/images/4d.png'
import Div from "../pages/styles/LoginStyle"
import "../pages/styles/login.css"
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  //Usuario y contraseña
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  //Lista de Usuarios
  const [usuario, setUsuario] = useState()
  const [loginStatus, setLoginStatus] = useState("")


  //Funcion para capturar datos de inputs
  const handleUser = (e) => {
    setUser(() => (e.target.value));
  }
  const handlePass = (e) => {
    setPassword(() => (e.target.value));
  }

  //Boton para inicio de sesion

  
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8801/login", { user: user, password: password })
      if (response.data.message) setLoginStatus(response.data.message)
      else{ 
        setUsuario(response.data[0])
        navigate("/main/"+usuario.user)
      }
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Div className='login'>
      <div className='form'>
        <img src={loginImg} alt="" />
        <form >
          <img src={logoImg} alt=""></img>
          <input type="text" placeholder='Usuario' onChange={handleUser} name='user'></input>
          <input type="password" placeholder='Contraseña' onChange={handlePass} name='password' ></input>
          <label style={{fontSize :"12px",color:"red"}}>{loginStatus}</label>
          <label>Aun no tienes cuenta? <Link to="/register">Registrate</Link></label>
          <button className='inicio' onClick={loginUser} type="submit">Iniciar Sesion</button>
        </form>
      </div>

    </Div>
  )
}

export default Login

