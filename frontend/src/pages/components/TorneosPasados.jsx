import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DIV, Torneo, Dic, Img } from "./styles.componentes/Styled"
import dota from "../images/juegos/dota.jpg"
import lol from "../images/juegos/lol.png"
import valorant from "../images/juegos/valorant.png"
import csgo from "../images/juegos/csgo.png"
import todo from "../images/juegos/todo.jpg"


const TorneosPasados = (props) => {

  const btn = document.querySelectorAll(".boton")
  function activarLink() {
    btn.forEach((item) =>
      item.classList.remove('active'))
    this.classList.add('active')

  }
  btn.forEach((item) => item.addEventListener('click', activarLink))




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
    document.title = "Torneos pasados"
  }, [torneosT])

  return (
    <DIV className='main-t' >
      <div className='containers'>
        <Dic>
          <div className='botones'>
            <button style={{ background: `url(${todo})`, backgroundSize: "cover" }} className='boton active' onClick={() => setJuego("torneospasados")} ></button>
            <button style={{ background: `url(${dota})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("dotaP")} ></button>
            <button style={{ background: `url(${valorant})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("valorantP")} ></button>
            <button style={{ background: `url(${lol})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("lolP")} ></button>
            <button style={{ background: `url(${csgo})`, backgroundSize: "cover" }} className='boton' onClick={() => setJuego("csgoP")} ></button>
          </div>
        </Dic>
        <h2 className='titulo'>Torneos pasados</h2>
        <div className='container-main'>
          {torneosT.map((torneo, i) => {
            return (
              <Torneo key={i} style={{ Width: "300px" }}>
                <div>
                  {/*imagen del videojuego   */}
                  <Img className={torneo.nombre} alt='' src={torneo.imagen} />
                  <p style={{ textAlign: "center", fontWeight: "bolder" }}>{torneo.nombre.toUpperCase()}</p>
                  <p>ID del Torneo: {torneo.id_torneo}</p>
                  <p>Cierre de inscripción: {torneo.fecha_final}</p>
                  <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "red" }}><ion-icon style={{ color: "red", marginRight: "10px", fontSize: "1.5rem" }} name="alarm-outline"></ion-icon>{torneo.fecha_torneo} - {torneo.hora} </p>
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

export default TorneosPasados
