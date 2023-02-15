import React from 'react'
import { Link } from 'react-router-dom'

const InicioTorneo = (props) => {
  return (
    <div>
        <h3>{props.titulo}</h3>
        <div>
            <p>Se muestras todos los torneos disponibles, dale click aquí</p>
            <Link to={`/main/${props.user}/torneosDisponibles`}>Torneos disponibles</Link>
        </div>
    </div>
  )
}

export default InicioTorneo