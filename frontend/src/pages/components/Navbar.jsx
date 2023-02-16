import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import user from "../images/user.png"
import "./styles.componentes/navbarStyle.css"

const Navbar = (props) => {
    function nobackbutton()
{
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button"
   window.onhashchange=function(){window.location.hash="no-back-button";}   
}
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid" id="container">
                <Link className="navbar-brand text-light" to={`/main/${props.user}/prueba`}>ADYperu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to={`/main/${props.user}/inicio`}>Inicio</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" > 
                                Torneos
                            </Link>
                            <div className='dropdown-menu' aria-labelledby="navbarDropdown" style={{transition: "0.5s",color:"red"}}>
                                <Link className="nav-link  text-dark dropdown-item" aria-current="page" to={`/main/${props.user}/torneosDisponibles`}>Torneos Disponibles</Link>
                                <Link className="nav-link text-dark dropdown-item" to={`/main/${props.user}/torneosPasados`}>Torneos pasados</Link>
                            </div>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={`/main/${props.user}/torneosPasados`}>Sobre Nosotros</Link>
                        </li>
                        
                    </ul>
                    <div className="d-flex">
                        <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                            <img alt='' src={user} className='' style={{ maxWidth: "80px" }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" />
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <li><p style={{textAlign: "center",fontWeight:"bolder",color:"#330033"}}>{props.user.toUpperCase()}</p></li>
                                {/*<li><Link className="dropdown-item" to="/">Editar perfil</Link></li>*/}
                                <li><Link className="dropdown-item" to={`/main/${props.user}/misTorneos`}>Mis torneos</Link></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><Link className="dropdown-item" to="/" onClick={nobackbutton}>Cerrar sesión</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    background: rgb(29,28,51);
    background: linear-gradient(90deg, rgba(29,28,51,1) 13%, rgba(60,60,193,1) 56%, rgba(24,96,111,1) 100%);
    #container{
        color: white;
    }

`

export default Navbar