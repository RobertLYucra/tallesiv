import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate}  from "react-router-dom";
import {Div} from "../pages/styles/RegisterStyle"
import regImg from "../pages/images/login.jpg"
import { Link } from 'react-router-dom';

const Register = () => {

  //Variable donde van losdatos del registro
  const [userI,setIUSer] = useState({
    user: "",
    name: "",
    lastname:"",
    password: "",
  })

  const navigate = useNavigate()

  const [password, setPassword] = useState();
  const [green, setGreen] = useState(true)
  const [data, setData] = useState([])
  const [confirmado, setConfirmado] = useState([])
  const [validarCampos, setValidarCampos] = useState(false)

  const handleChange =  (e)=>{
    setIUSer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const confirmarC = (e) =>{
    setPassword(e.target.value)
    if(e.target.value===userI.password){
      setGreen(true)
    }else{
      setGreen(false)
    }
  }

  //Funcion para inicio de sesion
  const handleClick = (e) =>{
    e.preventDefault();
    const registrar = async() => {
      try{
        const result = await axios.post("http://localhost:8801/register",userI)
        setData(result.data)
        if(result.data.message)setConfirmado (result.data.message)
      }catch(e){
        console.log(e)
      }
     
    }
    if(green===true && userI.user.length>0 && userI.name.length>0 && userI.lastname.length>0 && userI.password.length>0){
      setValidarCampos(false)
      registrar()
    } else{
      setValidarCampos(true)
    }
  }

  if(data.affectedRows===1){
    navigate("/")
  }

  return (
    <Div>
      <div className='contenido'>

      <img alt='' src={regImg}></img>
      <div className='form'>
        
        <label style={{color: "red",fontSize:"12px"}}   >{validarCampos?"Complete los campos":""}</label>
        <input className='entrada'  type="text"   onChange={handleChange} placeholder='Usuario' name="user"></input>
        <input className='entrada' type="text"   onChange={handleChange} placeholder='Nombre' name="name"></input>
        <input className='entrada' type="text" onChange={handleChange}  placeholder='Apellidos' name="lastname"></input>
        <input className='entrada' type="password"  onChange={handleChange}  placeholder='Contraseña' name="password"></input>
        <input className='entrada' type="password"   onChange={confirmarC} placeholder='Confirmar contraseña' name=""></input>
        <label style={{color: "red",fontSize:"12px"}}>{green?"":"Contraseñas no coinciden"}</label>
        <button className='button' onClick={handleClick}>Registrarse</button>
        <label style={{color: "red",fontSize:"12px"}}>{confirmado}</label>

        <p>Ya tienes una cuenta? <Link to="/"> Iniciar sesion</Link></p>
      </div>
      </div>
    </Div>
  )
}

export default Register