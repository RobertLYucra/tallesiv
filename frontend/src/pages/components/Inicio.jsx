import React from 'react'
import InicioTorneo from './inicioComponentes/InicioTorneo'

const Inicio = (props) => {
  return (
    <main>
      <div>
        <div>
            <h1> ADY PERU MUESTRA TAL</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, aliquam, dignissimos enim laudantium labore optio ex praesentium, in nam sit cumque? Quidem totam quam sed eum delectus rem facere minima.</p>
        </div>
        <img alt='' src=''></img>
      </div>
      <div>
        <InicioTorneo titulo="Torneos disponibles" user={props.userU}></InicioTorneo>
        <InicioTorneo titulo="Torneos pasados" user={props.userU}></InicioTorneo>
      </div>
    </main>
  )
}

export default Inicio