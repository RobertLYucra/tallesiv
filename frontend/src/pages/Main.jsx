import React from 'react'
import { Routes, useParams,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TorneosDisponibles from './components/TorneosDisponibles'
import TorneosPasados from './components/TorneosPasados'
import MisTorneos from './components/MisTorneos'
import FooterComponent from './components/FooterComponent'
import Inicio from './components/Inicio'
import SobreNosotros from './components/SobreNosotros'



const Main = (props) => {

  const user = useParams()

  return (
    <div>
      <Navbar user={user.user}/>
      
      <div>
      </div>
      <Routes>
        <Route path='/torneosPasados' element={<TorneosPasados  userU={user.user} />}/>
        <Route path='/torneosDisponibles' element={<TorneosDisponibles  userU={user.user} />}/>
        <Route path='/misTorneos' element={<MisTorneos  userU={user.user} />}/>
        <Route path='/sobreNosotros' element={<SobreNosotros  userU={user.user} />}/>
        <Route path='/*' element={<Inicio  userU={user.user} />}/>
      </Routes>
      <FooterComponent user={user.user}></FooterComponent>      
    </div>
    
  )
}

export default Main


