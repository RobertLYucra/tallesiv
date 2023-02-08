import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import loginImg from '../pages/login.jpg'
import logoImg from '../pages/4d.png'
import Div from "../pages/styles/LoginStyle"
import "../pages/styles/login.css"

const Login = (props) => {

  const navigate = useNavigate();

  //Usuario y contraseña
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  //Lista de Usuarios
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  //Funcion para capturar datos de inputs
  const handleUser = (e) => {
    setUser(() => (e.target.value));
  }
  const handlePass = (e) => {
    setPassword(() => (e.target.value));
  }
  //Boton para inicio de sesion
  const loginUser = (e) => {
    e.preventDefault();
    props.list.forEach((u) => {
      if (u.user === user && u.password === password) {
        setLogin(login ? false : true)
        navigate("/" + u.user)
      } else {
        setError("Ingrese la contraseña y usuario Correcta")
      }
    })
  }

  return (
      <Div className='login'>
        <div className='form'>
          <img src={loginImg} alt="" />
          <form action='#'>

            <img src={logoImg} alt=""></img>
            <input type="text" placeholder='Usuario' onChange={handleUser} name='user'></input>
            <input type="password" placeholder='Contraseña' onChange={handlePass} name='password' ></input>
            <p>{error}</p>
            <label>Aun no tienes cuenta? <span onClick={() => navigate("/register")}>Registrate</span></label>
            <button className='inicio' onClick={loginUser} type="submit">Iniciar Sesion</button>
          </form>
        </div>

      </Div>
  )
}

export default Login

