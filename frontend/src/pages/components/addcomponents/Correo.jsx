import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Correo(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        subtitle.style.color = '#fff';
        subtitle.style.fontSize = '25px';
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#333',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        },
    };

    function closeModal(e) {
        setIsOpen(false)
    }

    return (
        <div >
            <button onClick={openModal} type='button' className='btn btn-primary'><ion-icon name="mail-outline"></ion-icon>Enviar Correo</button>
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal} style={{background:"none",border:"none"}}><ion-icon  style={{fontSize:"1.5rem",right:"0px",color:"#6f42c1"}} name="close-circle-sharp"></ion-icon></button>
                <Form action="https://formsubmit.co/robertlyucra@email.com" method="POST">
                    <input type="text" name="name" required placeholder='Nombre completo' />
                    <input type="email" name="email" required placeholder='Correo electronico' />
                    <div class="form-group">
                        <textarea placeholder="Tu mensaje" class="form-control" name="message" rows="5" required></textarea>
                    </div>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value={`http://localhost:3000/main/${props.user}`}/>


                    <div className='button'>
                    <button type="submit">Enviar</button>

                    </div>
                </Form>
            </Modal>
        </div>
    );
}


const Form = styled.form`
    input{
        padding: 8px;
        outline: none;
        border-radius: 5px;
        margin-bottom: 15px;
        max-width: 100%;
        @media screen and (max-width: 450px){
            width: 100%;
        }
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            margin-top: 25px;
            font-weight: bold;
            padding: 7px 10px;
            border-radius: 10px;
            background: white;
            border: 2px solid purple;
            color: purple;
            &:hover{
                background-color: purple;
                color: white;
            }

        }
    }
`