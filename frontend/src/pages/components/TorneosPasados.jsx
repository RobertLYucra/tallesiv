import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DIV,Torneo,Dic,Img} from "./styles.componentes/Styled"

const TorneosPasados = (props) => {

  const [torneosT, setTorneosT] = useState([])
  const [juego, setJuego] = useState("torneospasados")

  useEffect(() => {
    async function listarRicky() {
      try {
        const result = await axios.get(`http://localhost:8801/${juego}`);
        setTorneosT(result.data)
      } catch (error) {
        console.log("error")
      }
    }
    listarRicky()
  }, [torneosT])

  return (
      <DIV className='main-t' >
      <Dic>
        <div className='botones'>
          <button className='btn btn-danger' onClick={() => setJuego("torneospasados")} >TODO</button>
          <button className='btn btn-danger' onClick={() => setJuego("dotaP")} >DOTA 2</button>
          <button className='btn btn-danger' onClick={() => setJuego("valorantP")} >VALORANT</button>
          <button className='btn btn-danger' onClick={() => setJuego("lolP")} >LOL</button>
          <button className='btn btn-danger' onClick={() => setJuego("csgoP")} >CS:GO </button>
        </div>
      </Dic>
      <h2 className='titulo'>Torneos pasados</h2>
        <div className='container-main'>
          {torneosT.map((torneo, i) => {
            return (
              <Torneo key={i} style={{  Width: "300px" }}>
                <div>
                  {/*imagen del videojuego   */}
                  <Img className={torneo.nombre} alt='' src={torneo.imagen} />
                  <p style={{textAlign:"center",fontWeight:"bolder"}}>{torneo.nombre.toUpperCase()}</p>
                  <p>ID del Torneo: {torneo.id_torneo}</p>
                  <p>Cierre de inscripción: {torneo.fecha_final}</p>
                  <p style={{display:"flex",alignItems:"center",fontWeight:"bold",color:"red"}}><ion-icon style={{color:"red",marginRight:"10px",fontSize:"1.5rem"}} name="alarm-outline"></ion-icon>{torneo.fecha_torneo} - {torneo.hora} </p>
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
