import React from 'react'
import styled from 'styled-components'
import { Mision } from './addcomponents/Mision'
import { Vision } from './addcomponents/Vision'

const SobreNosotros = () => {
  return (
    <Div>
      <div className='container' style={{ background: "#FFF", height: "100%", borderRadius: "10px" }}>
        <div>
        <h3 className='title'>Sobre Nosotros</h3>
        <div className='cards'>
          <Mision />
          <Vision />
        </div>
      </div>
      </div>
    </Div>
  )
}

export default SobreNosotros

const Div = styled.div`
  min-height: 80.5vh;
  display: grid;
  place-items: center;
  background: #2A3B47;
  .container{
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1200px) {
        max-width: 1200px;
    }
    .title{
    text-align: center;
    margin-bottom: 35px;
    color: #2A3B47;
    font-weight: bolder;
  }
  .cards{
    display: flex;
    transition: 0.5s ease;
    @media screen and (max-width: 620px){
      flex-direction: column;
    }
  }
  
  }
`