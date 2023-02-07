import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import loginImg from '../pages/login.jpg'
import Div from "../pages/styles/LoginStyle"
import "../pages/styles/login.css"
import Main from './Main';

const Login = () => {

  const navigate = useNavigate();

  //Usuario y contraseña
  const [user, setUser] = useState()
  const [password, setPassword] = useState()
  //Lista de Usuarios
  const [list, setList] = useState([])

  const [login,setLogin] = useState(false)
  const [error,setError] = useState("")
  const [userID,setUserID] = useState("")



  useEffect(() => {
    async function listarUsuario() {
      const response = await axios.get("http://localhost:8801/user")
      setList(response.data)
    }
    listarUsuario()

  }, [list])

  //Funcion para capturar datos de inputs
  const handleUser = (e) => {
    setUser(() => (e.target.value ));
  }
  const handlePass = (e) => {
    setPassword(() => (e.target.value ));
  }

  //Boton para inicio de sesion
    const loginUser  = (e)=>{
      e.preventDefault();
      list.forEach((u) =>{
        if(u.user===user && u.password===password){
          setLogin(login?false:true)
          setUserID(u.id)
          navigate("/"+u.id)
          
        }else setError("Ingrese la contraseña y usuario Correcta")
      })
    }

  return (
    <>
      <Div className='login'>
        <img src={loginImg} alt="" />
        <form>
          <input type="text" placeholder='Usuario' onChange={handleUser} name='user'></input>
          <input type="password" placeholder='Contraseña' onChange={handlePass} name='password'></input>
          <button className='inicio' onClick={loginUser}>Iniciar Sesion</button>
          <p>{error}</p>
        </form>

      </Div>
      <Main />
    </>
  )
}

export default Login

