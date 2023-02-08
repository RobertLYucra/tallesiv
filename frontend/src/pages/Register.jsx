import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate}  from "react-router-dom";

const Register = (props) => {
  const [userI,setIUSer] = useState({
    user: "",
    name: "",
    lastname:"",
    password: "",
  })

  const navigate = useNavigate()

  const [password, setPassword] = useState();
  const [green, setGreen] = useState(false)

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
  const handleClick = (e) =>{
    e.preventDefault();
    if(green===true && password!==""){
      props.list.forEach( async (u)=>{
        if(u.user!==userI.user){
            try {
              await axios.post("http://localhost:8801/register",userI)
          }catch (e){console.log(e)}
        }
        navigate("/login")
        
      })
    }else{
      console.log("Contraseñas no coinciden")
    }
  }

  return (
    <div style={{"display": "grid","placeItems":"center","minHeight":"100vh"}}>
      <form style={{"display": "flex", "flexDirection" : "column","maxWidth":"350px"}}>
        <input  type="text"   onChange={handleChange} placeholder='Usuario' name="user"></input>
        <input  type="text"   onChange={handleChange} placeholder='Nombre' name="name"></input>
        <input  type="text" onChange={handleChange}  placeholder='Apellidos' name="lastname"></input>
        <input  type="password"  onChange={handleChange}  placeholder='Contraseña' name="password"></input>
        <input  type="password"   onChange={confirmarC} placeholder='COnfirmar contraseña' name=""></input>
        <button onClick={handleClick}>Registrarse</button>
        <label>{green?"Correcto":"Incorrcto"}</label>
      </form>
    </div>
  )
}

export default Register