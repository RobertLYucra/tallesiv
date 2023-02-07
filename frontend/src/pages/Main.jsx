import React from 'react'
import { useParams } from 'react-router-dom'

const Main = (props) => {
  const id = useParams()
  console.log(id);
  return (
    <div>{id.id}</div>
  )
}

export default Main