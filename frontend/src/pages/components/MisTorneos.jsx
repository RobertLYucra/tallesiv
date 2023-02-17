import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DIV, Torneo, Dic, Img } from "./styles.componentes/Styled"

const MisTorneos = (props) => {

  const [torneosT, setTorneosT] = useState([])
  const [types, setTypes] = useState("pendientes")

  useEffect(() => {
    async function listarTorneo() {
      try {
        const result = await axios.post(`http://localhost:8801/${types}`, { user: props.userU });
        setTorneosT(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    listarTorneo()
  }, [torneosT])

  return (
    <DIV className='main-t' >
      <div className='containers'>
        <Dic>
          <div className='botones'>
            <button className='btn btn-success' style={{ width: "130px" }} onClick={() => setTypes("pendientes")} >PENDIENTES</button>
            <button className='btn btn-danger' style={{ width: "130px" }} onClick={() => setTypes("pendientesP")} >PARTICIPADOS</button>
          </div>
        </Dic>
        <h2 className='titulo'>Mis Torneos</h2>
        <div className='container-main'>
          {torneosT.map((torneo, i) => {
            return (
              <Torneo key={i} style={{ Width: "300px" }}>
                <div>
                  {/*imagen del videojuego   */}
                  <Img className={torneo.nombre} alt='' src={torneo.imagen} />
                  <p>ID del Torneo: {torneo.id_torneo}</p>
                  <p>VIDEOJUEGO: {torneo.nombre}</p>
                  <p>Cierre de inscripción: {torneo.fecha_final}</p>
                  <p>Fecha del torneo: {torneo.fecha_torneo} - {torneo.hora} </p>
                  {/*<Prueba idTorneo={torneo.id_torneo} u={props.userU} />*/}
                </div>
              </Torneo>
            )
          })}
        </div>
      </div>
    </DIV>
  )
}

export default MisTorneos
