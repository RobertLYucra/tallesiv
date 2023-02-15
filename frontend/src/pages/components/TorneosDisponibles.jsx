import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles.componentes/disponibles.css"
import Prueba from './Prueba'
import { DIV, Torneo,Dic ,Img} from "./styles.componentes/Styled"


const TorneosDisponibles = (props) => {

  const btn = document.querySelectorAll(".boton")
  function activarLink (){
    btn.forEach((item)=>
      item.classList.remove('active'))
      this.classList.add('active')
 
  }
  btn.forEach((item)=>item.addEventListener('click',activarLink))

  const [torneosT, setTorneosT] = useState([])
  const [juego, setJuego] = useState("torneos")

  useEffect(() => {
    async function listarRicky() {
      const result = await axios.get(`http://localhost:8801/${juego}`);
      setTorneosT(result.data)
    }
    listarRicky()
  }, [torneosT])

  return (
    <DIV className='main-t'>
      <Dic>
        <div className='botones'>
          <button className='boton active' onClick={() => setJuego("torneos")} >TODO</button>
          <button className='boton' onClick={() => setJuego("dota")} >DOTA 2</button>
          <button className='boton' onClick={() => setJuego("valorant")} >VALORANT</button>
          <button className='boton' onClick={() => setJuego("lol")} >LOL</button>
          <button className='boton' onClick={() => setJuego("csgo")} >CS:GO </button>
        </div>
      </Dic>
      <h2 className='titulo'>Torneos Disponibles</h2>
      <div className='container-main' >

        {torneosT.map((torneo, i) => {
          return (
            <Torneo key={i} className='torneo'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/*imagen del videojuego   */}
                <Img alt='' src={torneo.imagen} className={torneo.nombre} />
                <p style={{textAlign:"center",fontWeight:"bolder"}}>{torneo.nombre.toUpperCase()}</p>
                <p>ID del Torneo: {torneo.id_torneo}</p>
                <p>Cierre de inscripción: {torneo.fecha_final}</p>
                <p style={{display:"flex",alignItems:"center",fontWeight:"bold",color:"green"}}><ion-icon style={{color:"green",marginRight:"10px",fontSize:"1.5rem"}} name="alarm-outline"></ion-icon>{torneo.fecha_torneo} - {torneo.hora} </p>
                <hr style={{ width: "100%", height: "2px" }}></hr>
                <Prueba idTorneo={torneo.id_torneo} u={props.userU} />
              </div>
            </Torneo>
          )
        })}
      </div>
    </DIV>
  )
}

export default TorneosDisponibles
