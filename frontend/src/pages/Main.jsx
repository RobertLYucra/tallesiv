import React from 'react'
import { Routes, useParams,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TorneosDisponibles from './components/TorneosDisponibles'
import TorneosPasados from './components/TorneosPasados'

const Main = (props) => {
  const user = useParams()
  console.log(user)
  return (
    <div>
      <Navbar user={user.user}/>
      <div>
      </div>
      <Routes>
        <Route path='/torneosPasados' element={<TorneosPasados/>}/>
        <Route path='/torneosDisponibles' element={<TorneosDisponibles/>}/>
        <Route path='/' element={<TorneosDisponibles/>}></Route>
      </Routes>
    </div>
    
  )
}

export default Main