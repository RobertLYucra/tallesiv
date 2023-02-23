import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'
import styled from 'styled-components';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Confirmacion(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [confirmado, setConfirmado] = useState(false);

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

  const handleDelete = async () => {
      await axios.post("http://localhost:8801/deleteMiTorneo", { user: props.u, id_torneo: props.idTorneo })
      setIsOpen(false)
  }



  return (
    <Div >
      <button onClick={openModal} type='button' className='btn btn-primary'><ion-icon name="trash-outline"></ion-icon></button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <Button onClick={closeModal} style={{  }}>X</Button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} >¿Estas seguro abandonar ahora? </h2>
        <p style={{color: "white"}}>{confirmado}</p>
        <hr style={{width:'100%',height:"2px"}}></hr>
        <Botones >
          <button className='btn btn-success' type='button' onClick={handleDelete}>Si</button>
          <button className='btn btn-danger' onClick={()=>setIsOpen(false)} >No</button>
        </Botones>
      </Modal>
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  place-items: center;
`
const Botones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 50px;
      height: 40px;
      margin: 10px 6px;
      border-radius: 8px;
    }
`

const Button = styled.button`
  transform: translateX(1200%);
  width: 25px;
  height: 25pxS;
  font-weight: bolder;
  margin-bottom:15px;
  background: transparent;
  height: 30px;
  color: #fff;
  border-radius: 20%;
  border: 1px solid #fff
`

