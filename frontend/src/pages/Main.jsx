import React from 'react'
import { useParams } from 'react-router-dom'

const Main = (props) => {
  const id = useParams()
  return (
    <div>{id.id}</div>
  )
}

export default Main