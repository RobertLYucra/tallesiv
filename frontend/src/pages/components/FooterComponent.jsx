import React from 'react'
import styled from 'styled-components'
import Correo from "../components/addcomponents/Correo"

const FooterComponent = (props) => {
  return (
    <Footer>
        <div className='foot-c'>
          <h2>ADYperu</h2>
          <Correo user={props.user}></Correo>
          <div className='contacts'>
                <p> <ion-icon name="mail-outline"></ion-icon> adyperu@gmail.com</p>
                <p><ion-icon name="call-outline"></ion-icon>(01)77451</p>
                <p> <ion-icon name="logo-instagram"></ion-icon>@adyperues</p>
          </div>
        </div>
    </Footer>
  )
}

export default FooterComponent


const Footer = styled.footer`
    width:100%;
    background: #2A3B47;
    display:grid;
    place-items: center;
    .foot-c{
      margin-top: 30px;
      width: 800px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      @media screen and (max-width: 810px){
        width: 95%;

      }
      .contacts{
        margin-left: 20px;
        p{
          display: flex;
          align-items: center;
          ion-icon{
            margin-right: 10px;
          }
        }
      }
    }

`
