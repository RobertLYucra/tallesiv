import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles.componentes/disponibles.css"
import Prueba from './Prueba'
import { DIV, Torneo, Dic, Img } from "./styles.componentes/Styled"
import dota from "../images/juegos/dota.jpg"
import lol from "../images/juegos/lol.png"
import valorant from "../images/juegos/valorant.png"
import csgo from "../images/juegos/csgo.png"
import todo from "../images/juegos/todo.jpg"


const TorneosDisponibles = (props) => {
  //Estilo bonton efecto
  const btn = document.querySelectorAll(".boton")
  function activarLink() {
    btn.forEach((item) =>
      item.classList.remove('active'))
    this.classList.add('active')
  }
  btn.forEach((item) => item.addEventListener('click', activarLink))


  //Hooks
  const [torneosT, setTorneosT] = useState([])
  const [juego, setJuego] = useState("torneos")

  useEffect(() => {
    async function listarRicky() {
      const result = await axios.get(`http://localhost:8801/${juego}`);
      setTorneosT(result.data)
    }
    listarRicky()
    document.title = "Torneos " + juego;
  }, [torneosT])

  return (
    <DIV className='main-t'>
      <div className="containers">
        <Dic>
          <div className='botones'>
            <button style={{ background: `url(${todo})`, backgroundSize: "cover" }} className='boton active' onClick={() => setJuego("torneos")} ></button>
            <button style={{ background: `url(${dota})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("dota")} ></button>
            <button style={{ background: `url(${valorant})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("valorant")} ></button>
            <button style={{ background: `url(${lol})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("lol")} ></button>
            <button style={{ background: `url(${csgo})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("csgo")} ></button>
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
                  <p style={{ textAlign: "center", fontWeight: "bolder" }}>{torneo.nombre.toUpperCase()}</p>
                  <p >ID: {torneo.id_torneo} _____________________ S/. {torneo.premio}</p>
                  <p>Cierre de inscripción: {torneo.fecha_final}</p>
                  <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "green" }}><ion-icon style={{ color: "green", marginRight: "10px", fontSize: "1.5rem" }} name="alarm-outline"></ion-icon>{torneo.fecha_torneo} - {torneo.hora} </p>
                  <hr style={{ width: "100%", height: "2px" }}></hr>
                  <Prueba idTorneo={torneo.id_torneo} u={props.userU} />
                </div>
              </Torneo>
            )
          })}
        </div>
      </div>
    </DIV>
  )
}

export default TorneosDisponibles
