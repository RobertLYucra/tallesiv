import React from 'react'
import { useParams } from 'react-router-dom'

const Main = (props) => {
  const id = useParams()
  return (
    <div>
      <h1>Hola buenas tardes: {id.id.toUpperCase()}</h1>
    </div>
  )
}

export default Main