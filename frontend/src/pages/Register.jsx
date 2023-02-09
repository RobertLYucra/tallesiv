import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate}  from "react-router-dom";

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
  const [green, setGreen] = useState(false)
  const [status, setStatus] = useState([])
  const [data, setData] = useState([])
  const [error,setError] = useState()

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
        const result = await axios.post("http://172.19.1.147:8801/register",userI)
        setData(result.data)
      }catch(e){
        console.log(e)
      }
     
    }
    registrar()
  }
  if(data.affectedRows==1){
    alert("Registro exitoso")
    navigate("/login")
  }

  return (
    <div style={{"display": "grid","placeItems":"center","minHeight":"100vh"}}>
      <div style={{"display": "flex", "flexDirection" : "column","maxWidth":"350px"}}>
        <input  type="text"   onChange={handleChange} placeholder='Usuario' name="user"></input>
        <input  type="text"   onChange={handleChange} placeholder='Nombre' name="name"></input>
        <input  type="text" onChange={handleChange}  placeholder='Apellidos' name="lastname"></input>
        <input  type="password"  onChange={handleChange}  placeholder='Contraseña' name="password"></input>
        <input  type="password"   onChange={confirmarC} placeholder='COnfirmar contraseña' name=""></input>
        <button onClick={handleClick}>Registrarse</button>
        <label>{data.code}</label>
        <label>{green?"Correcto":"Incorrcto"}</label>
      </div>
    </div>
  )
}

export default Register