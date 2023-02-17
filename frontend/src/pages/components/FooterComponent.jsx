import React from 'react'
import styled from 'styled-components'

const FooterComponent = () => {
  return (
    <Footer>
        <div className='foot-c'>
              <h2>ADYperu</h2>
              <div className='contacts'>
                <p> <ion-icon name="mail-outline"></ion-icon> adyperu@gmail.com</p>
                <p> <ion-icon name="call-outline"></ion-icon>927676456</p>
                <p> <ion-icon name="logo-instagram"></ion-icon> @adyperu</p>
              </div>
        </div>
    </Footer>
  )
}

export default FooterComponent


const Footer = styled.footer`
    width:100%;
    background: #2A3B47;
    display: grid;
    justify-content: center;
    .foot-c{
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      width: 800px;
      align-items: center;
      color: white;
      .contacts{
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