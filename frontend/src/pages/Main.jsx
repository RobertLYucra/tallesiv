import React, { useState, useEffect } from 'react'
import { Routes, useParams,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TorneosDisponibles from './components/TorneosDisponibles'
import TorneosPasados from './components/TorneosPasados'
import styled from 'styled-components'

import axios from 'axios'


const Main = (props) => {

  const user = useParams()


  const [torneosT, setTorneosT] = useState([])
  const [juego, setJuego] = useState("torneos")

  useEffect(() => {
    async function listarRicky() {
      const result = await axios.get(`http://localhost:8801/${juego}`);
      setTorneosT(result.data)
    }
    listarRicky()
  },[torneosT])


  return (
    <div>
      <Navbar user={user.user}/>
      <Dic>
        <div className='botones'>
        <button className='btn btn-success' onClick={()=>setJuego("torneos")} >TODO</button>
        <button className='btn btn-success' onClick={()=>setJuego("dota")} >DOTA 2</button>
        <button className='btn btn-success' onClick={()=>setJuego("valorant")} >VALORANT</button>
        <button className='btn btn-success' onClick={()=>setJuego("lol")} >LOL</button>
        <button className='btn btn-success' onClick={()=>setJuego("csgo")} >CS:GO </button>
        </div>
      </Dic>
      <div>
      </div>
      <Routes>
        <Route path='/torneosPasados' element={<TorneosPasados  userU={user.user} />}/>
        <Route path='/torneosDisponibles' element={<TorneosDisponibles lista = {torneosT} userU={user.user} />}/>
        <Route path='/*' element={<TorneosDisponibles lista={torneosT} userU={user.user}/>}></Route>
      </Routes>      
    </div>
    
  )
}

export default Main

const Dic = styled.div`
  display:grid;
  place-items: center;
  .botones{
    max-width: 100%;
    display: grid;
    margin: 20px 25px;
    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
    button{
      width: 100px;
      height: 35px;
      margin: 5px 5px;
      border-radius:9px;
    }
  }
`
