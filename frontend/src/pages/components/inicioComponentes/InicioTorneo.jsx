import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const InicioTorneo = (props) => {
  return (
    <Card>
        <h3 className={props.class}>{props.titulo}</h3>
        <div>
            <p>Se muestras todos los {props.titulo.toLowerCase()}, dale click aquí</p>
            <hr style={{height: "2px",background:"green",width:"100%"}}></hr>
            <Link className={`l${props.class}`} to={`/main/${props.user}/${props.lc}`}>Ver más</Link>
        </div>
    </Card>
  )
}

export default InicioTorneo

const Card = styled.div`
  max-width: 350px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 25px;
  border-radius: 12px;
  margin: auto 25px;
  .pasado{
    color: red;
  }
  .actual{
    color: green;
  }
  h3{
    margin-bottom: 15px;
  }
  div{
    display: grid;
    place-items: center;
    p{
      font-size: 15px;
    }
    .lactual{
      margin: 10px;
      padding: 12px;
      background: #fff;
      border-radius: 5px;
      border: 2px solid green;
      transition: 0.5s ease;
      text-decoration: none;
      color: green;
      font-weight:  bold;
      &:hover{
        background: green;
        color: white;
      }
    }
    .lpasado{
      margin: 10px;
      padding: 12px;
      background: #fff;
      border-radius: 5px;
      border: 2px solid red;
      transition: 0.5s ease;
      text-decoration: none;
      color: red;
      font-weight:  bold;
      &:hover{
        background: red;
        color: white;
      }
    }
  }
`