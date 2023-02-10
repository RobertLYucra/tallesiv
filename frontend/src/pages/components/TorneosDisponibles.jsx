import React, { useEffect, useState } from 'react'

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
    <div>
      {torneos.map((torneo,i) =>{
        return(
          <div key={i} style={{border:"1px solid red",maxWidth:"350px"}}>
            <p>{torneo.id_torneo}</p>
            <p>{torneo.id_juego}</p>
            <p>{torneo.date_torneo}</p>
            <p>{torneo.date_end}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TorneosDisponibles