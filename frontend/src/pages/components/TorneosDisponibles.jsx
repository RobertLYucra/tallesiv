import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import "./styles.componentes/disponibles.css"
import valorant from "../images/dota.jpg"

const TorneosDisponibles = () => {

  const [torneos, setTorneos] = useState([])

  useEffect(() => {
    async function listarRicky() {
      const response = await fetch("http://localhost:8801/torneos");
      const data = await response.json();
      setTorneos(data)
    }
    listarRicky()
  },[torneos])
  return (
    <div className='main'>
      <div className='container-main'>
      {torneos.map((torneo,i) =>{
        return(
          <div key={i} style={{border:"1px solid red",maxWidth:"300px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <img  alt='' src="" className={torneo.nombre} style={{width:"100%",height:"120px"}}/>
            <p>ID del Torneo: {torneo.id_torneo}</p>
            <p>VIDEOJUEGO: {torneo.nombre}</p>
            <p>Cierre de inscripción: {torneo.fecha_final}</p>
            <p>Fecha del torneo: {torneo.fecha_torneo}</p>
            <button> Inscribirme</button>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}


export default TorneosDisponibles