import React from 'react'
import InicioTorneo from './inicioComponentes/InicioTorneo'
import inicio from "../images/inicio.png"
import styled from 'styled-components'
import TorneoMejor from './inicioComponentes/TorneoMejor'

const Inicio = (props) => {
  return (
    <Main>
      <div className='containers'>
        <div className='portada'>
          <div className='texto'>
            <h2 className='title' style={{color:"#12205a"}}> ADYperu</h2>
            <p style={{margin: " 25px auto"}}>Somos una empresa encargada de organizar videojuegos para para diferentes videojuegos como <b>Dota 2, Valorant, League of Legend y CS:GO</b></p>
            <TorneoMejor user={props.userU}></TorneoMejor>
          </div>
          <img alt='' className='img-portada' src={inicio}></img>
        </div>
        <div className='cards'>
          <InicioTorneo titulo="Torneos disponibles" lc="torneosDisponibles" user={props.userU} class="actual"></InicioTorneo>
          <InicioTorneo titulo="Torneos pasados" lc="torneosPasados" user={props.userU} class="pasado"></InicioTorneo>
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
  .containers{
    width: 1200px;
    background: #fff;
    min-height: 87vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    place-items: center;
    border-radius: 10px;
    transition: 0.5s;
    @media screen and (max-width: 1199px) {
      width: 900px;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    .portada{
      margin-top: 25px;
      display: flex;
      justify-content:center;
      max-width: 95%;
      padding: 40px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      border-radius: 25px;
      transition: 0.5s;
      @media screen and (max-Width: 900px){
        flex-direction: column-reverse;
        justify-content:  center;
        align-items: center;
      }
      

      .texto{
        max-width: 420px;
        margin: 15px;
        .title{
          text-align:center;
        }
      }
      .img-portada{
        max-width: 600px;
        border-radius: 15px;
        transition: 0.5s ease;
        @media screen and (max-width: 557px){
          width: 300px;
        }
      }
    }
  }
  .cards{
    display: flex;
    max-width: 1110px;
    place-items: center;
    margin-top: 50px;
    @media screen and (max-width: 557px) {
      flex-direction: column;
    }
    
    

  }
`