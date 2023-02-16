import React from 'react'
import InicioTorneo from './inicioComponentes/InicioTorneo'
import inicio from "../images/inicio.png"
import styled from 'styled-components'
import TorneoMejor from './inicioComponentes/TorneoMejor'

const Inicio = (props) => {
  return (
    <Main>
      <div className='container'>
        <div className='portada' style={{ display: "flex" }}>
          <div className='texto'>
            <h2 className='title'> ADYperu</h2>
            <p>Somos una empresa encargada de organizar videojuegos para para diferentes videojuegos como <span>Dota 2</span>, <span>Valorant</span></p>
            <TorneoMejor></TorneoMejor>
          </div>
          <img alt='' src={inicio}></img>
        </div>
        <div>
          <InicioTorneo titulo="Torneos disponibles" lc="torneosDisponibles" user={props.userU}></InicioTorneo>
          <InicioTorneo titulo="Torneos pasados" lc="torneosPasados" user={props.userU}></InicioTorneo>
        </div>
      </div>
    </Main>
  )
}

export default Inicio


const Main =styled.main`
  display: grid;
  place-items:center;
  background-color: #2A3B47;
  .container{
    max-width: 992px;
    background: #fff;
    min-height: 87vh;
    .portada{
      margin-top: 25px;
      justify-content:center;
      .texto{
        max-width: 420px;
        .title{
          text-align:center;
        }
      }
    }
  }
`