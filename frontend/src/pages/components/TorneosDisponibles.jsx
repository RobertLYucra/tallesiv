import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const TorneosDisponibles = () => {

  const [torneos, setTorneos] = useState([])

  useEffect(() => {
    async function listarRicky() {
      const response = await fetch("http://localhost:8801/torneos");
      const data = await response.json();
      setTorneos(data)
    }
    listarRicky()
  },[])
  return (
    <DIV>
      <div className='container-main'>
      {torneos.map((torneo,i) =>{
        return(
          <div key={i} style={{border:"1px solid red",maxWidth:"350px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
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
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  justify-content: center;
.container-main{
  margin-top: 50px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
}
  
`

export default TorneosDisponibles