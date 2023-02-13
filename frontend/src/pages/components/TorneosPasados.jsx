import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DIV,Torneo} from ".//styles.componentes/styled"

const TorneosPasados = (props) => {
  const [torneosT, setTorneosT] = useState([])

  const [juego, setJuego] = useState(props.juego)

  useEffect(() => {
    async function listarRicky() {
      try {
        const result = await axios.get(`http://localhost:8801/torneospasados`);
        setTorneosT(result.data)
      } catch (error) {
        console.log("error")
      }
    }
    listarRicky()
  }, [torneosT])

  return (
      <DIV className='main-t' >
      <h2 className='titulo'>Torneos pasados</h2>
        <div className='container-main'>
          {torneosT.map((torneo, i) => {
            return (
              <Torneo key={i} style={{  Width: "300px" }}>
                <div>
                  {/*imagen del videojuego   */}
                  <div className={torneo.nombre} style={{ width: "100%", height: "120px" }} />
                  <p>ID del Torneo: {torneo.id_torneo}</p>
                  <p>VIDEOJUEGO: {torneo.nombre}</p>
                  <p>Cierre de inscripción: {torneo.fecha_final}</p>
                  <p>Fecha del torneo: {torneo.fecha_torneo} - {torneo.hora} </p>
                  <p>{props.u}</p>
                  {/*<Prueba idTorneo={torneo.id_torneo} u={props.userU} />*/}
                </div>
              </Torneo>
            )
          })}
        </div>
      </DIV>
  )
}

export default TorneosPasados
